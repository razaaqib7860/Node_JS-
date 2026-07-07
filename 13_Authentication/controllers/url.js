//install nanoid package for generating unique short URLs;
const {nanoid}=require("nanoid");

const Url=require("../models/url"); 

// Function to generate a short URL
async function generateShortUrl(req, res) {
const {originalUrl} = req.body;
if (!originalUrl) {
  return res.status(400).json({ error: "Original URL is required" });
}
const shortUrl = nanoid(8);
await Url.create({
  originalUrl,
  shortUrl
});
const baseUrl = `${req.protocol}://${req.get("host")}`;
return res.render("result", { 
  SUrl: shortUrl,
  originalUrl: originalUrl,
  baseUrl,
 }); // Render the EJS template with the short URL
// return res.status(201).json({ msg: "Short URL generated successfully", shortUrl });
}
// Function to get all URLs
async function getAllUrl(req, res) {
  const urls = await Url.find();
  return res.status(200).json({ urls });
}
// Function to get a URL by its short URL
async function getUrlByShortUrl(req, res) {
  const { shortUrl } = req.params;
  // const url = await Url.findOne({ shortUrl });
  const clickUrl =  await Url.findOneAndUpdate(
    { shortUrl }, 
    { $push: { visitHistory: { timestamp: new Date().toString() } },
      $inc: { clicks: 1 }
    }
  );
  if (!clickUrl) {
    return res.status(404).json({ error: "Short URL not found" });
  }
  else{
    const clicks = await Url.findOne({ shortUrl });
    return res.status(200).redirect(clicks.originalUrl);
  }
}
// Function to get analytics by short URL
async function getAnalyticsByShortUrl(req, res) {
  const { shortUrl } = req.params;
  const ShortUrl = await Url.findOne({ shortUrl });
  if (!ShortUrl) {
    return res.status(404).json({ error: "Short URL not found" });
  }
  return res.status(200).json({ visitHistory: ShortUrl.visitHistory, clicks: ShortUrl.clicks });
}     

module.exports = { generateShortUrl, getAllUrl, getUrlByShortUrl, getAnalyticsByShortUrl };