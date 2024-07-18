import {
  cpSync,
  existsSync,
  mkdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "fs";
import { kebabCase } from "lodash";
import { Token, Tokens, marked } from "marked";

const testmaticDependencyPath = "node_modules/testmatic";

const readmeContent = readFileSync(
  `${testmaticDependencyPath}/README.md`,
).toString();

const root = marked.lexer(readmeContent);

export function isMdHeading(node: Token): node is Tokens.Heading {
  return node.type === "heading";
}

export function isMdHeadingLevel(depth: number) {
  return (node: Token): node is Tokens.Heading => {
    return isMdHeading(node) && node.depth === depth;
  };
}

interface Section {
  readonly heading: Tokens.Heading;
  readonly tokens: readonly Token[];
}

export function splitByHeading1(root: Token[]): readonly Section[] {
  const headingLevel1s = root.filter(isMdHeadingLevel(1));
  const tokensByHeading = headingLevel1s.map((heading) => ({
    heading,
    tokens: getTokensUntilNextHeading(root, heading, 2).slice(1),
  }));

  return tokensByHeading;
}

export function splitByHeading2(root: readonly Token[]): readonly Section[] {
  const headingLevel2s = root.filter(isMdHeadingLevel(2));
  const tokensByHeading = headingLevel2s.map((heading) => ({
    heading,
    tokens: getTokensUntilNextHeading(root, heading, 2),
  }));
  return tokensByHeading;
}

export function splitByHeading3(tokens: readonly Token[]): readonly Section[] {
  const headingLevel3s = tokens.filter(isMdHeadingLevel(3));
  const tokensByHeading = headingLevel3s.map((heading) => ({
    heading,
    tokens: getTokensUntilNextHeading(root, heading, 3),
  }));
  return tokensByHeading;
}

export function getTokensUntilNextHeading(
  root: readonly Token[],
  heading: Tokens.Heading,
  level: number,
) {
  const indexOfHeadingLevel2 = root.indexOf(heading);
  let index = indexOfHeadingLevel2 + 1;
  const tokens: Token[] = [];
  while (
    root[index] &&
    !(
      isMdHeading(root[index]) && (root[index] as Tokens.Heading).depth <= level
    )
  ) {
    tokens.push(root[index]);
    index++;
  }
  return tokens;
}

function buildHeadingFolder(
  heading: Tokens.Heading,
  tokens: readonly Token[],
  index: number,
  headingFolderPath: string,
) {
  mkdirSync(headingFolderPath);

  const headingFolderPathCategoryPath = `${headingFolderPath}/_category_.json`;
  const category = {
    label: heading.text,
    position: index + 1,
    link: {
      type: "generated-index",
    },
  };
  writeFileSync(
    headingFolderPathCategoryPath,
    JSON.stringify(category, undefined, "  "),
  );

  const subHeadingSections = splitByHeading3(tokens);
  if (subHeadingSections.length > 0) {
    let subheadingIndex = 0;
    for (const { heading, tokens } of subHeadingSections) {
      buildSubHeadingFile(heading, tokens, subheadingIndex, headingFolderPath);
      subheadingIndex++;
    }
  }
}

function buildSubHeadingFile(
  heading: Tokens.Heading,
  tokens: readonly Token[],
  index: number,
  headingFolderPath: string,
) {
  const body = tokens.map((token) => token.raw).join("");

  const content = `
---
sidebar_position: ${index + 1}
---

# ${heading.text}

${body}
`.trim();

  const subHeadingFilePath = `${headingFolderPath}/${kebabCase(
    heading.text,
  )}.md`;

  writeFileSync(subHeadingFilePath, postProcess(content));
}

function buildHeadingFile(
  heading: Tokens.Heading,
  tokens: readonly Token[],
  index: number,
  headingFolderPath: string,
) {
  const body = tokens.map((token) => token.raw).join("");

  const content = `
---
sidebar_position: ${index + 1}
---

# ${heading.text}

${body}
`.trim();

  const headingFilePath = `${headingFolderPath}.md`;

  const contentProcessed = postProcess(content);

  if (heading.text === "testmatic") {
    console.log("buildHeadingFile", { headingFilePath, contentProcessed });
  }

  writeFileSync(headingFilePath, contentProcessed);
}

function postProcess(content: string) {
  for (const [headingName, headingUrl] of Object.entries(headingUrls)) {
    content = content.replace(
      new RegExp(`\\]\\(#${headingName}\\)`, "g"),
      `](${headingUrl})`,
    );
  }
  return content;
}

function buildHeading(
  heading: Tokens.Heading,
  tokens: readonly Token[],
  index: number,
  headingFolderPath: string,
) {
  const hasHeadingLevel3s = Boolean(tokens.find(isMdHeadingLevel(3)));

  if (hasHeadingLevel3s) {
    buildHeadingFolder(heading, tokens, index, headingFolderPath);
  } else {
    buildHeadingFile(heading, tokens, index, headingFolderPath);
  }
}

const headingUrls: Record<string, string> = {};

const docsFolderPath = `${__dirname}/../docs`;

function generateFromReadme() {
  if (existsSync(docsFolderPath)) {
    rmSync(docsFolderPath, { recursive: true, force: true });
  }
  mkdirSync(docsFolderPath);

  parseTokens(root);

  buildIntroduction();

  buildSections();
}

function buildIntroduction() {
  const topHeadingTokens = splitByHeading1(root);
  const { heading, tokens } = topHeadingTokens[0];
  const topHeadingPathName = "introduction";
  const topHeadingFolderPath = `${docsFolderPath}/${topHeadingPathName}`;
  heading.text = "Introduction";

  buildHeading(heading, tokens, 0, topHeadingFolderPath);
}

function skipHeading2(section: Section) {
  return section.heading.text !== "Contents";
}

function buildSections() {
  const tokensByHeading = splitByHeading2(root).filter(skipHeading2);

  let index = 0;
  for (const { heading, tokens } of tokensByHeading) {
    const headingPathName = kebabCase(heading.text);
    const headingFolderPath = `${docsFolderPath}/${headingPathName}`;

    buildHeading(heading, tokens, index, headingFolderPath);

    index++;
  }
}

function parseTokens(tokens: Token[]) {
  const previousHeadingByLevel: Record<number, string> = {};

  for (const token of tokens) {
    if (isMdHeading(token)) {
      const headingPathName = kebabCase(token.text);
      if (token.depth === 1) {
        headingUrls[headingPathName] = `/docs`;
        previousHeadingByLevel[1] = headingPathName;
      } else if (token.depth === 2) {
        headingUrls[headingPathName] = `/docs/category/${headingPathName}`;
        headingUrls[`${headingPathName}-part`] = `/docs/${headingPathName}`;
        previousHeadingByLevel[2] = `${headingPathName}-part`;
      } else {
        for (let i = token.depth - 1; i > 0; i--) {
          if (previousHeadingByLevel[i]) {
            headingUrls[headingPathName] = `${
              headingUrls[previousHeadingByLevel[i]]
            }/${headingPathName}`;
            break;
          }
        }
        previousHeadingByLevel[token.depth] = headingPathName;
      }
    }

    if ("tokens" in token && token.tokens) {
      parseTokens(token.tokens);
    }
  }
}

function copyDocsFilesToStatic() {
  cpSync(`${testmaticDependencyPath}/docs`, `${__dirname}/../static/docs`, {
    recursive: true,
  });
}

copyDocsFilesToStatic();

generateFromReadme();
