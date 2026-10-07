import { chromium } from "playwright";
import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const imagesDir = path.join(root, "public", "images");
const outDir = path.join(root, "public", "program-cards-png");

const cards = [
  {
    id: "education-literacy-advancement",
    title: "Education & Literacy Advancement",
    image: "image6.png",
    description:
      "Support our mission to provide scholarship programs for underprivileged children and distribute educational resources...",
  },
  {
    id: "womens-health-sanitation",
    title: "Women's Health & Sanitation",
    image: "image7.jpg",
    description:
      "Join us in providing sanitary pads to girls in need and conducting health education workshops...",
  },
  {
    id: "legal-advocacy-human-rights",
    title: "Legal Advocacy & Human Rights",
    image: "image9.jpg",
    description:
      "Witness the incredible journey of providing legal aid workshops for women and vulnerable populations...",
  },
  {
    id: "workshops-mentorship",
    title: "Workshops & Mentorship",
    image: "image8.jpg",
    description:
      "Unleash the potential through entrepreneurship, leadership, and business skill development programs...",
  },
];

function imageUrl(filename) {
  return path.join(imagesDir, filename).replace(/\\/g, "/");
}

function buildHtml() {
  const cardBlocks = cards
    .map(
      (card) => `
    <article class="card" id="${card.id}">
      <div class="card-image">
        <img src="file:///${imageUrl(card.image)}" alt="" />
      </div>
      <div class="card-body">
        <h3>${card.title}</h3>
        <p>${card.description}</p>
      </div>
    </article>`
    )
    .join("\n");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
      background: #f5f5f5;
      padding: 24px;
    }
    .card {
      width: 320px;
      background: #fff;
      border-radius: 16px;
      overflow: hidden;
      border: 1px solid #f3f4f6;
      box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
      margin-bottom: 32px;
    }
    .card-image {
      height: 192px;
      overflow: hidden;
    }
    .card-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
    .card-body {
      padding: 24px;
    }
    .card-body h3 {
      font-size: 20px;
      font-weight: 700;
      color: #111827;
      line-height: 1.25;
      margin-bottom: 12px;
    }
    .card-body p {
      font-size: 14px;
      line-height: 1.625;
      color: #4b5563;
    }
  </style>
</head>
<body>
${cardBlocks}
</body>
</html>`;
}

async function main() {
  await mkdir(outDir, { recursive: true });

  const htmlPath = path.join(root, "scripts", ".program-cards-export.html");
  await writeFile(htmlPath, buildHtml(), "utf8");

  const browser = await chromium.launch();
  const page = await browser.newPage({ deviceScaleFactor: 2 });

  await page.goto(`file:///${htmlPath.replace(/\\/g, "/")}`, {
    waitUntil: "networkidle",
  });

  for (const card of cards) {
    const locator = page.locator(`#${card.id}`);
    const outPath = path.join(outDir, `${card.id}.png`);
    await locator.screenshot({ path: outPath, type: "png" });
    console.log(`Saved ${outPath}`);
  }

  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
