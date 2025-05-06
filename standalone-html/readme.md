# Law Review Formatter

This guide will help you properly format law review articles according to Law Review style guidelines.

---

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
- [Workflow](#workflow)
- [Template Information](#template-information)
- [JavaScript Formatter](#javascript-formatter)
- [Troubleshooting](#troubleshooting)
- [FAQ](#faq)

---

## Overview

The Formatting toolkit consists of two components:

1. A Word template with predefined styles (`LawReview_Template.dotx`)
2. A browser-based text formatter for smart quotes, em dashes, and heading detection

This approach eliminates cross-platform compatibility issues and avoids browser security restrictions.

---

## Getting Started

### Requirements

- Microsoft Word (any modern version)
- A web browser
- Your draft article text

### Installation

1. Download the `LawReview_Template.dotx` file
2. Download the `formatter.html` file
3. No other installation required!

---

## Workflow

### Step 1: Prepare Your Content

1. **Draft your article** in any word processor or text editor
2. **Ensure proper structure:**
   - Use consistent heading notation (I., A., 1., a., i.)
   - Place footnotes where they belong in the text
   - Clearly indicate your title, author info, and abstract

### Step 2: Use the JavaScript Formatter

1. **Open the HTML tool** in any web browser
2. **Enter metadata:**
   - Article title
   - Author name
   - Choose footnote symbol (asterisk or dagger)
   - Enter author footnote text
3. **Process your content:**
   - Paste your draft text into the left panel
   - Select formatting options (smart quotes, dashes, headings)
   - Click "Format Text"
   - Review the formatted output in the right panel
   - Click "Copy to Clipboard" when satisfied

### Step 3: Apply Template Formatting

1. **Open `LawReview_Template.dotx`** in Word
2. **Create a new document** based on the template
3. **Paste your formatted text** from the clipboard
4. **Apply styles from the template:**
   - `#` → Heading 1
   - `##` → Heading 2
   - `###` → Heading 3
   - `####` → Heading 4
   - For block quotes, apply "Block Quote" style
5. **Add proper footnotes:**
   - Use *Insert → Footnote* for each reference
   - Copy the footnote text into the footnote area
   - The first footnote will use your chosen symbol automatically
6. **Generate Table of Contents:**
   - Place cursor where TOC should appear
   - Go to *References → Table of Contents*
   - Select the pre-formatted TOC style
7. **Set up headers and footers:**
   - Double-click in the header area
   - Enter journal info on left, page numbers on right

### Step 4: Final Formatting and Review

1. **Check document settings:**
   - Page size: 6" × 9"
   - Margins: 1" all around
2. **Review formatting consistency:**
   - Confirm correct styles for headings
   - Check footnote formatting and numbering
   - Verify paragraph indentation and spacing
3. **Perform final cleanup:**
   - Update TOC (right-click → Update Field)
   - Check for any formatting issues
   - Run spell check and proofread
4. **Save the finished document:**
   - Use *File → Save As*
   - Name it like `LASTNAME_Article_JournalName.docx`

---

## Template Information

The `LawReview_Template.dotx` includes styles with the following configuration:

| Style Name         | Font             | Size  | Format      | Alignment | Indent         |
|--------------------|------------------|-------|-------------|-----------|----------------|
| Title              | Times New Roman  | 14pt  | SMALL CAPS  | Centered  | None           |
| Author             | Times New Roman  | 11pt  | Italic      | Centered  | None           |
| Heading 1 (I.)     | Times New Roman  | 11pt  | SMALL CAPS  | Centered  | None           |
| Heading 2 (A.)     | Times New Roman  | 11pt  | Bold        | Left      | 0.5"           |
| Heading 3 (1.)     | Times New Roman  | 11pt  | Bold        | Left      | 1.0"           |
| Heading 4 (a.)     | Times New Roman  | 11pt  | Italic      | Left      | 1.5"           |
| Heading 5 (i.)     | Times New Roman  | 11pt  | Regular     | Left      | 2.0"           |
| Block Quote        | Times New Roman  | 9pt   | Regular     | Justified | 0.5" Left/Right|
| Footnote Text      | Times New Roman  | 9pt   | Regular     | Justified | Hanging 0.3"   |

---

## JavaScript Formatter

The `formatter.html` file is a standalone tool that helps prepare your text for the Word template by:

- Converting straight quotes to curly quotes
- Replacing double hyphens (`--`) with em dashes (`—`)
- Detecting headings based on outline format (I., A., 1., etc.)
- Adding markdown-style heading markers (`#`, `##`, etc.)
- Formatting title and author information

---

## Troubleshooting

**Q: The template styles aren't showing in my Styles pane**  
A: Make sure you're creating a *new* document based on the template, not just opening the template file.

**Q: The footnotes aren't formatting correctly**  
A: Use Word's built-in *Insert → Footnote* feature. Do not manually superscript numbers.

**Q: The page size isn't 6" × 9"**  
A: Check *Page Layout → Size*, and select a custom size if needed.

---

## FAQ

**Q: Can I use this on macOS?**  
A: Yes, both the Word template and HTML formatter work identically on Windows and macOS.

**Q: Do I need an internet connection?**  
A: No, all tools work offline once downloaded.

**Q: Can I customize the styles?**  
A: Yes, you can modify the template styles to match your specific needs.

**Q: Is there an automated way to apply styles?**  
A: The JavaScript tool adds heading markers for easier identification, but you'll need to manually apply the styles in Word.

---

*Created for a Law Review – Last Updated 2025*
