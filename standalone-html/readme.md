<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Law Review Formatter</title>
    <style>
        body {
            font-family: 'Segoe UI', Roboto, Oxygen, Ubuntu, 'Helvetica Neue', sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        h1, h2, h3, h4 {
            color: #2e8b57;
            margin-top: 1.5em;
        }
        h1 {
            border-bottom: 2px solid #2e8b57;
            padding-bottom: 10px;
        }
        a {
            color: #2e8b57;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
        code {
            background-color: #f5f5f5;
            padding: 2px 5px;
            border-radius: 3px;
            font-family: monospace;
        }
        table {
            border-collapse: collapse;
            width: 100%;
            margin: 20px 0;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f5f5f5;
        }
        tr:nth-child(even) {
            background-color: #f9f9f9;
        }
        ul, ol {
            padding-left: 20px;
        }
        .step {
            background-color: #f9f9f9;
            border-left: 4px solid #2e8b57;
            padding: 10px 15px;
            margin: 20px 0;
            border-radius: 0 4px 4px 0;
        }
        footer {
            margin-top: 40px;
            border-top: 1px solid #eee;
            padding-top: 20px;
            font-style: italic;
            text-align: center;
        }
    </style>
</head>
<body>
    <h1>Law Review Formatter</h1>
    
    <p>This guide will help you properly format law review articles according to a Law Review style guidelines.</p>
    
    <h2>Table of Contents</h2>
    <ul>
        <li><a href="#overview">Overview</a></li>
        <li><a href="#getting-started">Getting Started</a></li>
        <li><a href="#workflow">Workflow</a></li>
        <li><a href="#template-information">Template Information</a></li>
        <li><a href="#javascript-formatter">JavaScript Formatter</a></li>
        <li><a href="#troubleshooting">Troubleshooting</a></li>
        <li><a href="#faq">FAQ</a></li>
    </ul>
    
    <h2 id="overview">Overview</h2>
    
    <p>The Formatting toolkit consists of two components:</p>
    <ol>
        <li>A Word template with predefined styles (LawReview_Template.dotx)</li>
        <li>A browser-based text formatter for smart quotes, em dashes, and heading detection</li>
    </ol>
    <p>This approach eliminates cross-platform compatibility issues and avoids browser security restrictions.</p>
    
    <h2 id="getting-started">Getting Started</h2>
    
    <h3>Requirements</h3>
    <ul>
        <li>Microsoft Word (any modern version)</li>
        <li>A web browser</li>
        <li>Your draft article text</li>
    </ul>
    
    <h3>Installation</h3>
    <ol>
        <li>Download the LawReview_Template.dotx file</li>
        <li>Download the formatter.html file</li>
        <li>No other installation required!</li>
    </ol>
    
    <h2 id="workflow">Workflow</h2>
    
    <div class="step">
        <h3>Step 1: Prepare Your Content</h3>
        <ol>
            <li><strong>Draft your article</strong> in any word processor or text editor</li>
            <li><strong>Ensure proper structure:</strong>
                <ul>
                    <li>Use consistent heading notation (I., A., 1., a., i.)</li>
                    <li>Place footnotes where they belong in the text</li>
                    <li>Clearly indicate your title, author info, and abstract</li>
                </ul>
            </li>
        </ol>
    </div>
    
    <div class="step">
        <h3>Step 2: Use the JavaScript Formatter</h3>
        <ol>
            <li><strong>Open the HTML tool</strong> in any web browser</li>
            <li><strong>Enter metadata:</strong>
                <ul>
                    <li>Article title</li>
                    <li>Author name</li>
                    <li>Choose footnote symbol (asterisk or dagger)</li>
                    <li>Enter author footnote text</li>
                </ul>
            </li>
            <li><strong>Process your content:</strong>
                <ul>
                    <li>Paste your draft text into the left panel</li>
                    <li>Select formatting options (smart quotes, dashes, headings)</li>
                    <li>Click "Format Text"</li>
                    <li>Review the formatted output in the right panel</li>
                    <li>Click "Copy to Clipboard" when satisfied</li>
                </ul>
            </li>
        </ol>
    </div>
    
    <div class="step">
        <h3>Step 3: Apply Template Formatting</h3>
        <ol>
            <li><strong>Open the LawReview_Template.dotx</strong> in Word</li>
            <li><strong>Create a new document</strong> based on the template</li>
            <li><strong>Paste your formatted text</strong> from the clipboard</li>
            <li><strong>Apply styles from the template:</strong>
                <ul>
                    <li>Find text marked with # and apply "Heading 1" style</li>
                    <li>Find text marked with ## and apply "Heading 2" style</li>
                    <li>Find text marked with ### and apply "Heading 3" style</li>
                    <li>Find text marked with #### and apply "Heading 4" style</li>
                    <li>For block quotes, select text and apply "Block Quote" style</li>
                </ul>
            </li>
            <li><strong>Add proper footnotes:</strong>
                <ul>
                    <li>For each footnote reference, use Insert → Footnote</li>
                    <li>Copy the footnote text into the footnote area</li>
                    <li>The first footnote will automatically use your chosen symbol</li>
                </ul>
            </li>
            <li><strong>Generate Table of Contents:</strong>
                <ul>
                    <li>Place cursor where TOC should appear</li>
                    <li>Go to References → Table of Contents</li>
                    <li>Select the pre-formatted TOC style</li>
                </ul>
            </li>
            <li><strong>Set up headers and footers:</strong>
                <ul>
                    <li>Double-click in the header area</li>
                    <li>Enter journal information on left, page numbers on right</li>
                </ul>
            </li>
        </ol>
    </div>
    
    <div class="step">
        <h3>Step 4: Final Formatting and Review</h3>
        <ol>
            <li><strong>Check document settings:</strong>
                <ul>
                    <li>Verify page size is 6" × 9"</li>
                    <li>Confirm 1" margins all around</li>
                </ul>
            </li>
            <li><strong>Review formatting consistency:</strong>
                <ul>
                    <li>Ensure all headings use correct styles</li>
                    <li>Check footnote formatting and numbering</li>
                    <li>Verify paragraph indentation and spacing</li>
                </ul>
            </li>
            <li><strong>Perform final cleanup:</strong>
                <ul>
                    <li>Update Table of Contents (right-click → Update Field)</li>
                    <li>Check for any remaining formatting issues</li>
                    <li>Run spell check and proofread</li>
                </ul>
            </li>
            <li><strong>Save the finished document:</strong>
                <ul>
                    <li>Use File → Save As</li>
                    <li>Name it appropriately (e.g., "LASTNAME_Article_JournalName.docx")</li>
                </ul>
            </li>
        </ol>
    </div>
    
    <h2 id="template-information">Template Information</h2>
    
    <p>The LawReview_Template.dotx includes properly configured styles for:</p>
    
    <table>
        <tr>
            <th>Style Name</th>
            <th>Font</th>
            <th>Size</th>
            <th>Format</th>
            <th>Alignment</th>
            <th>Indent</th>
        </tr>
        <tr>
            <td>Title</td>
            <td>Times New Roman</td>
            <td>14pt</td>
            <td>SMALL CAPS</td>
            <td>Centered</td>
            <td>None</td>
        </tr>
        <tr>
            <td>Author</td>
            <td>Times New Roman</td>
            <td>11pt</td>
            <td>Italic</td>
            <td>Centered</td>
            <td>None</td>
        </tr>
        <tr>
            <td>Heading 1 (I.)</td>
            <td>Times New Roman</td>
            <td>11pt</td>
            <td>SMALL CAPS</td>
            <td>Centered</td>
            <td>None</td>
        </tr>
        <tr>
            <td>Heading 2 (A.)</td>
            <td>Times New Roman</td>
            <td>11pt</td>
            <td>Bold</td>
            <td>Left</td>
            <td>0.5"</td>
        </tr>
        <tr>
            <td>Heading 3 (1.)</td>
            <td>Times New Roman</td>
            <td>11pt</td>
            <td>Bold</td>
            <td>Left</td>
            <td>1.0"</td>
        </tr>
        <tr>
            <td>Heading 4 (a.)</td>
            <td>Times New Roman</td>
            <td>11pt</td>
            <td>Italic</td>
            <td>Left</td>
            <td>1.5"</td>
        </tr>
        <tr>
            <td>Heading 5 (i.)</td>
            <td>Times New Roman</td>
            <td>11pt</td>
            <td>Regular</td>
            <td>Left</td>
            <td>2.0"</td>
        </tr>
        <tr>
            <td>Block Quote</td>
            <td>Times New Roman</td>
            <td>9pt</td>
            <td>Regular</td>
            <td>Justified</td>
            <td>0.5" L/R</td>
        </tr>
        <tr>
            <td>Footnote Text</td>
            <td>Times New Roman</td>
            <td>9pt</td>
            <td>Regular</td>
            <td>Justified</td>
            <td>Hanging 0.3"</td>
        </tr>
    </table>
    
    <h2 id="javascript-formatter">JavaScript Formatter</h2>
    
    <p>The formatter.html file is a standalone tool that helps prepare your text for the Word template by:</p>
    
    <ul>
        <li>Converting straight quotes ("') to curly quotes ("" '')</li>
        <li>Converting double hyphens (--) to em dashes (—)</li>
        <li>Detecting headings based on outline format (I., A., 1., etc.)</li>
        <li>Adding markdown-style heading markers for easy style application</li>
        <li>Formatting title and author information</li>
    </ul>
    
    <h2 id="troubleshooting">Troubleshooting</h2>
    
    <p><strong>Q: The template styles aren't showing in my Styles pane</strong><br>
    A: Make sure you're creating a new document based on the template, not just opening the template file.</p>
    
    <p><strong>Q: The footnotes aren't formatting correctly</strong><br>
    A: Ensure you're using Word's built-in footnote feature (Insert → Footnote) rather than manually creating superscript numbers.</p>
    
    <p><strong>Q: The page size isn't 6" × 9"</strong><br>
    A: Check Page Layout → Size and select Custom Size to verify dimensions.</p>
    
    <h2 id="faq">FAQ</h2>
    
    <p><strong>Q: Can I use this on macOS?</strong><br>
    A: Yes, both the Word template and HTML formatter work identically on Windows and macOS.</p>
    
    <p><strong>Q: Do I need an internet connection?</strong><br>
    A: No, all tools work offline once downloaded.</p>
    
    <p><strong>Q: Can I customize the styles?</strong><br>
    A: Yes, you can modify the template styles to match your specific needs.</p>
    
    <p><strong>Q: Is there an automated way to apply styles?</strong><br>
    A: The JavaScript tool adds heading markers (# ## ###) to make it easier to find and apply styles, but you'll need to apply them manually in Word.</p>
    
    <footer>
        <p>Created for a Law Review – Last Updated 2025</p>
    </footer>
</body>
</html>
