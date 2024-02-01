const express = require("express");
const cors = require("cors");

require("./database/db");

const app = express();

app.use(cors());

app.use(express.json());

const authRoutes = require("./routes/auth.route");
const walletRoutes = require("./routes/wallet.route");
const transactionRoutes = require("./routes/transaction.route");


// Register Routes
app.use("/api/auth", authRoutes);
// app.use("/api/wallet", walletRoutes);
// app.use("/api/transaction", transactionRoutes);

// Start server Configuration
const PORT = 3000 ;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });   

