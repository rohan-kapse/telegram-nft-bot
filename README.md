# telegram-nft-bot

## Automated Telegram Bot for EVM Blockchain Events

This project is an **Automated Telegram Bot** that listens to blockchain events on any **EVM chain**. Specifically, it is designed to listen to **NFT transfers** from a specified NFT smart contract.

It can be expanded to listen for:
- **NFT minting events**
- **Token transfers**
- **Other blockchain events**

### Features
- Listens to NFT transfers from a smart contract on an EVM chain.
- Sends real-time updates to a Telegram bot whenever an NFT is transferred.
- Supports additional features for listening to other types of events, such as token transfers or NFT minting.

## Prerequisites
Before running the project, you need to have the following installed:

1. **Node.js** (Recommended version: `v16+`)
2. **npm** (comes with Node.js)
3. **ngrok** (for public URL tunneling)
4. **Telegram Bot API Token**

## Setup Instructions

### 1. Clone the Repository
First, clone this repository to your local machine:

```bash
git clone <repository-url>
cd telegram-nft-bot
```

### 2. Install Dependencies
Run the following command to install the required packages:

```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the root directory of the project and add the following variables:

```env
TELEGRAM_BOT_TOKEN=your-telegram-bot-token
WEBHOOK_SECRET=your-webhook-secret (optional)
EVM_PROVIDER_URL=https://mainnet.infura.io/v3/your-infura-project-id (or your preferred provider)
NFT_SMART_CONTRACT_ADDRESS=0xYourNFTSmartContractAddress
```

- **TELEGRAM_BOT_TOKEN**: Create a Telegram bot by talking to [@BotFather](https://t.me/botfather) and get the token.
- **WEBHOOK_SECRET**: (Optional) Secret used for securing the webhook.
- **EVM_PROVIDER_URL**: URL for connecting to the Ethereum (or other EVM) blockchain (e.g., Infura or Alchemy).
- **NFT_SMART_CONTRACT_ADDRESS**: The address of the NFT smart contract you want to monitor.

### 4. Run the Project

#### Step 1: Run the Backend Server
Open a terminal window and navigate to the project directory. Start the backend server using:

```bash
npm run dev
```

This will start the server with `nodemon` to watch for any code changes and restart the server automatically.

#### Step 2: Set up ngrok
Run `ngrok` to expose your local server:

```bash
ngrok http 5001
```

This will give you a publicly accessible URL, like `http://<random-string>.ngrok.io`, which you will use to configure the webhook.

### 5. Configure Webhook with Telegram Bot
Now, open your Telegram bot and send `/start` to it. Your bot should respond with a message. The bot will listen for NFT transfer events and send notifications when one occurs.

### 6. Deploy the Bot (Optional)
To make the bot work continuously, you can deploy it to a cloud provider like Heroku, AWS, or DigitalOcean. You’ll need to set the environment variables there and expose your webhook URL using a service like ngrok or use the cloud provider’s equivalent solution.

## How It Works

1. **NFT Transfer Monitoring**: The bot listens for NFT transfers using the event logs of an NFT smart contract. When an NFT is transferred, the bot captures the relevant details:
   - **From Address**: The sender's address
   - **To Address**: The recipient's address
   - **Token Name and ID**: The NFT's name and ID
   - **Transaction Hash**: The hash of the transaction
2. **Telegram Notification**: The bot sends these details as a message to your Telegram bot for real-time updates.

### Example Event Output
The bot will log details like:

```
From address: 0x1234...5678, To address: 0x8765...4321, Token Item: MyNFT #1234, Transaction Hash: 0xabcde...12345
```

You can customize the bot to listen to additional events, such as **NFT minting** or **token transfers**, by modifying the code in `webhook.js`.

## Development

To contribute or modify the bot, follow these steps:

1. Fork the repository.
2. Clone your fork to your local machine.
3. Create a new branch for your changes.
4. Implement the changes.
5. Commit the changes and push to your fork.
6. Submit a pull request to the main repository.

## Contributing

Feel free to open issues, fork the repository, and submit pull requests. All contributions are welcome!

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

---

**Note**: Be sure to configure and use your own API keys and secrets for production deployments.
```

Check Out My Personal Bored Ape Yacht Club Telegram Bot
- I also have a personal Telegram bot that listens to events from the Bored Ape Yacht Club (BAYC). You can check it out and join the community!
👉 Link: https://t.me/BoredApeYachtClubNFTBot
👉 Username: @BoredApeYachtClubNFTBot
