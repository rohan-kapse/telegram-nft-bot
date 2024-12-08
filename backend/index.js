require("dotenv").config();
const express = require("express");
const TelegramBot = require("node-telegram-bot-api")
const app = express();
const port = 5001;

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, {polling:true});

app.use(express.json());

app.post("/webhook", async (req, res) => {
    const webhook = req.body;

    if (webhook.nftTransfer && Array.isArray(webhook.nftTransfer)) {
        for (const nftTransfer of webhook.nftTransfer) {
            const fromAddress = `From address: ${nftTransfer.from.slice(
                0,
                4
            )}...${nftTransfer.from.slice(-4)}`;
            
            const toAddress = `To address: ${nftTransfer.to.slice(
                0,
                4
            )}...${nftTransfer.to.slice(-4)}`;
            
            const tokenItem = `Token Item: ${nftTransfer.tokenName} #${nftTransfer.tokenId}`;
            
            const transactionHash = `Transaction Hash: ${nftTransfer.transactionHash}`;

          
            const chatId = -1002361326806;
            const text = `${fromAddress}, ${toAddress}, ${tokenItem}, ${transactionHash}`

            bot.sendMessage(chatId, text);
        }
    } else {
        console.log("No NFT Transfers found or invalid payload structure");
    }
    

    return res.status(200).json({ message: "Webhook processed successfully" });
});

app.listen(port, () => {
    console.log("Listening for NFT Transfers");
});
 