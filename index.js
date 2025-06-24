const fs = require("fs");
const unzipper = require("unzipper");

(async () => {
  const zipPath = "./TOOLS DDOS VPS __ TERMUX ONLY.zip";
  if (!fs.existsSync("ekstrak.flag")) {
    await fs.createReadStream(zipPath)
      .pipe(unzipper.Extract({ path: "." }))
      .promise();

    fs.writeFileSync("ekstrak.flag", "done");
    console.log("✅ ZIP berhasil diekstrak");
  }

  // Ganti ini dengan file utama dari hasil ekstrak
  require("./index.js");
})();
