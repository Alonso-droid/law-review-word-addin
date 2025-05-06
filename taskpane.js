// taskpane.js

function smartFormat(text) {
  return text
    .replace(/--/g, "—")
    .replace(/(^|[\s\(\[\{])"(?=\w)/g, "$1“")
    .replace(/"(?=\W|$)/g, "”")
    .replace(/(^|[\s\(\[\{])'(?=\w)/g, "$1‘")
    .replace(/'(?=\W|$)/g, "’");
}

async function formatDocument() {
  try {
    await Word.run(async (context) => {
      const title = document.getElementById("title").value.trim();
      const author = document.getElementById("author").value.trim();
      const abstract = document.getElementById("abstract").value.trim();
      const footnote = document.getElementById("footnote").value.trim();
      const symbol = document.getElementById("symbol").value;

      const body = context.document.body;

      // ===== Insert Title =====
      if (title) {
        const titlePara = body.insertParagraph(title, Word.InsertLocation.start);
        titlePara.font.name = "Times New Roman";
        titlePara.font.size = 14;
        titlePara.font.bold = false;
        titlePara.font.smallCaps = true;
        titlePara.alignment = Word.Alignment.centered;
        titlePara.lineSpacing = 15.4;
        titlePara.spaceAfter = 12;
        titlePara.spaceBefore = 0;
      }

      // ===== Insert Author =====
      if (author) {
        const authorPara = body.insertParagraph(`${author}${symbol}`, Word.InsertLocation.after);
        authorPara.font.name = "Times New Roman";
        authorPara.font.size = 11;
        authorPara.font.italic = true;
        authorPara.alignment = Word.Alignment.centered;
        authorPara.spaceBefore = 0;
        authorPara.spaceAfter = 12;
      }

      // ===== Insert Abstract =====
      if (abstract) {
        const abstractHeading = body.insertParagraph("ABSTRACT", Word.InsertLocation.after);
        abstractHeading.font.name = "Times New Roman";
        abstractHeading.font.size = 11;
        abstractHeading.font.smallCaps = true;
        abstractHeading.bold = false;
        abstractHeading.alignment = Word.Alignment.centered;

        const abstractText = body.insertParagraph(abstract, Word.InsertLocation.after);
        abstractText.font.name = "Times New Roman";
        abstractText.font.size = 11;
        abstractText.italic = true;
        abstractText.lineSpacing = 15.4;
        abstractText.spaceAfter = 12;
      }
      // ===== Insert Table of Contents =====
      const tocHeading = body.insertParagraph("Table of Contents", Word.InsertLocation.after);
      tocHeading.styleBuiltIn = Word.Style.heading1;
      tocHeading.font.name = "Times New Roman";
      tocHeading.font.size = 12;
      tocHeading.alignment = Word.Alignment.left;

      const toc = body.insertParagraph("", Word.InsertLocation.after);
      toc.insertField("TOC \\o \"1-3\" \\h \\z \\u", true);

      await context.sync();

      // ===== Smart punctuation cleanup =====
      const paragraphs = context.document.body.paragraphs;
      paragraphs.load("items");
      await context.sync();

      paragraphs.items.forEach(p => {
        const cleaned = smartFormat(p.text);
        if (cleaned !== p.text) {
          p.insertText(cleaned, "Replace");
        }
        p.font.name = "Times New Roman";
        p.font.size = 12;
        p.lineSpacing = 15.4;
        p.spaceBefore = 0;
        p.spaceAfter = 12;
      });

      await context.sync();

      // ===== Insert Header =====
      const sections = context.document.sections;
      sections.load("items");
      await context.sync();

      const header = sections.items[0].getHeader("Primary");
      const headerPara = header.insertParagraph("Michigan State Law Review\t", Word.InsertLocation.end);
      headerPara.font.name = "Times New Roman";
      headerPara.font.size = 10;

      const shortTitle = title.slice(0, 30);
      headerPara.insertText("\t" + shortTitle, "End");

      // ===== Outline-based Heading Styling =====
      const allParas = context.document.body.paragraphs;
      allParas.load("items");
      await context.sync();

      allParas.items.forEach(p => {
        const text = p.text.trim();

        if (/^I{1,3}[\.\s]/.test(text)) {
          p.styleBuiltIn = Word.Style.heading1;
        } else if (/^[A-H][\.\s]/.test(text)) {
          p.styleBuiltIn = Word.Style.heading2;
        } else if (/^\d+[\.\s]/.test(text)) {
          p.styleBuiltIn = Word.Style.heading3;
        } else if (/^[a-h][\.\s]/.test(text)) {
          p.font.italic = true;
          p.font.name = "Times New Roman";
          p.font.size = 12;
        }
      });

      await context.sync();

      // ===== Insert Author Footnote =====
      if (footnote) {
        body.insertBreak("Page", "After");
        const footPara = body.insertParagraph(`${symbol} ${footnote}`, Word.InsertLocation.end);
        footPara.font.name = "Times New Roman";
        footPara.font.size = 9;
        footPara.alignment = Word.Alignment.left;
      }

      await context.sync();
      console.log("Law review formatting complete.");
    });
  } catch (error) {
    console.error("Formatting failed:", error);
    alert("Error: " + error.message);
  }
}
