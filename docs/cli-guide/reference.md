---
sidebar_position: 4
---

# Reference

<!-- insert cli-reference start -->

#### init

Usage: `init`

Create a new project in the current working directory

#### project create

Usage: `project create`

Create a new project in the current working directory (same as `testmatic init`)

#### test list

Usage: `test list [options]`

List tests in the current project

Options:

<table>
<thead>
  <tr>
    <th>Syntax</th>
    <th>Description</th>
  </tr>
</thead>
<tbody>
  <tr>
<td>
<code>-t</code>,<br /><code> --tag &lt;value&gt;</code>
</td>
<td>
Filter by tag
</td>
</tr>
</tbody>
</table>

#### test add

Usage: `test add [options]`

Add a new test to the project

Options:

<table>
<thead>
  <tr>
    <th>Syntax</th>
    <th>Description</th>
  </tr>
</thead>
<tbody>
  <tr>
<td>
<code>-t</code>,<br /><code> --title &lt;value&gt;</code>
</td>
<td>
Title of the test.
Also used to generate an underscored filename used to refer to the test in short-hand.
Titles must be unique.
Titles should briefly summarise the test steps.

Required - must be provided, either via prompt or command line.

</td>
</tr>
<tr>
<td>
<code>-d</code>,<br /><code> --description &lt;value&gt;</code>
</td>
<td>
Description of the test.
Longer than the title, provides a more detailed summary of the test.

Tests can also include tags, enclosed in round brackets: (, ).
For further information, see 'testmatic tag help'.

Optional.

</td>
</tr>
<tr>
<td>
<code>-s</code>,<br /><code> --steps [steps...]</code>
</td>
<td>
List of steps of the test.

Add each step in quotes separated by a space, e.g.: "step one" "step two"
Steps will be in the order that they are provided.

Required - at least one step must be provided, either via prompt or command line.

</td>
</tr>
<tr>
<td>
<code>-l</code>,<br /><code> --links [links...]</code>
</td>
<td>
List of links to associate with the test.
For example, a deep link to the web page being tested or relevant documentation.

Add each link href in quotes separated by a space.
E.g.: "http://product.com/login" "http://wiki.com/login-flow".

Links can be prefixed with text separated by a pipe "|".
E.g. "Login page|http://product.com/login" "Login flow docs|http://wiki.com/login-flow"

Optional.

</td>
</tr>
</tbody>
</table>

#### test delete

Usage: `test delete <testNameOrTitle>`

Delete a test

#### test show

Usage: `test show <testNameOrTitle>`

Show the full details of a test

#### test link add

Usage: `test link add [options] <testNameOrTitle> <linkHrefOrTitle>`

Add a new link to a test

Options:

<table>
<thead>
  <tr>
    <th>Syntax</th>
    <th>Description</th>
  </tr>
</thead>
<tbody>
  <tr>
<td>
<code>-t</code>,<br /><code> --title &lt;value&gt;</code>
</td>
<td>
Title of the new link.

Optional.

</td>
</tr>
</tbody>
</table>

#### test link delete

Usage: `test link delete <testNameOrTitle> <linkHrefOrTitle>`

Delete a link from a test

#### test link open

Usage: `test link open <testNameOrTitle> <linkHrefOrTitle>`

Open a test link in the browser

#### tag list

Usage: `tag list`

List tags in the current project

#### tag add

Usage: `tag add [options]`

Add a new tag to the project

Options:

<table>
<thead>
  <tr>
    <th>Syntax</th>
    <th>Description</th>
  </tr>
</thead>
<tbody>
  <tr>
<td>
<code>-t</code>,<br /><code> --title &lt;value&gt;</code>
</td>
<td>
Title of the tag.
Also used to generate an underscored filename used to refer to the test in short-hand.
Titles must be unique.
Titles should briefly describe the tag.

Required - must be provided, either via prompt or command line.

</td>
</tr>
<tr>
<td>
<code>-y</code>,<br /><code> --type &lt;value&gt;</code>
</td>
<td>
Type of the tag.
Used to categorise one or more similar tags.
E.g. "page" for tags that refer to a page in an website.

Optional.

</td>
</tr>
<tr>
<td>
<code>-d</code>,<br /><code> --description &lt;value&gt;</code>
</td>
<td>
Description of the test.
Longer than the title, provides a more detailed description of the tag.

Optional.

</td>
</tr>
<tr>
<td>
<code>-l</code>,<br /><code> --links [links...]</code>
</td>
<td>
List of links to attach to the tag.
For example, a deep link to the web page being tested or relevant documentation.

Add each link href in quotes separated by a space.
E.g.: "http://product.com/login" "http://wiki.com/login-flow".

Links can be prefixed with text separated by a pipe "|".
E.g. "Login page|http://product.com/login" "Login flow docs|http://wiki.com/login-flow"

Optional.

</td>
</tr>
</tbody>
</table>

#### tag delete

Usage: `tag delete <tagNameOrTitle>`

Delete a tag

#### tag show

Usage: `tag show <tagNameOrTitle>`

Show the full details of a tag

#### tag link add

Usage: `tag link add [options] <tagNameOrTitle> <tagLinkHref>`

Add a new link to a tag

Options:

<table>
<thead>
  <tr>
    <th>Syntax</th>
    <th>Description</th>
  </tr>
</thead>
<tbody>
  <tr>
<td>
<code>-t</code>,<br /><code> --title &lt;value&gt;</code>
</td>
<td>
Title of the new link.

Optional.

</td>
</tr>
</tbody>
</table>

#### tag link delete

Usage: `tag link delete <tagNameOrTitle> <linkHrefOrTitle>`

Delete a link from a tag

#### tag link open

Usage: `tag link open <tagNameOrTitle> <linkHrefOrTitle>`

Open a tag link in the browser

#### tag type

Usage: `tag type <tagNameOrTitle> <tagType>`

Set the type of a tag

#### tag impacts

Usage: `tag impacts <tagNameOrTitle>`

List the tests and tags that are impacted by a tag

#### run show

Usage: `run show <testNameOrTitle> [runDateTime]`

Show the full details of a run

#### run open

Usage: `run open <testNameOrTitle> [runDateTime]`

Open a run folder

<!-- insert cli-reference end -->