const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const port = 7500;
let accounts = [];
let accountId = 1001;

generateAccountId = () => {
    return (accountId++).toString();
}


app.post('/createAccount', (req, res) => {
    const { name, email, amount } = req.body;
    if (!name || !email || amount <= 0 || typeof amount != 'number') {
        res.status(500).json({ error: 'Invalid Details' });
    }
    const accountID = generateAccountId();
    const newAccount = { accountID, name, email, amount, transactions: [] };
    accounts.push(newAccount);
    res.status(200).json({ message: 'Account created successfully', accountID });
    console.log('Accounts:', accounts);
});

app.get('/balance/:accountId', (req, res) => {
    const accountID  = String(req.params.accountId);
    const account = accounts.find(account => String(account.accountID) === accountID);
    if (!account) {
        res.status(404).json({ error: 'Account not found ' });
    }
    res.status(200).json(`The balance of Account Number: ${account.accountID} is ${account.amount}`);
});

app.post('/transfer', (req, res) => {
    const { fromAccount, toAccount, amount } = req.body;
    if (!fromAccount || !toAccount || typeof amount !== 'number') {
        res.status(400).json({ error: 'Invalid Details' });
    }
    const fromAcc = accounts.find(account => String(account.accountID) === fromAccount);
    const toAcc = accounts.find(account => String(account.accountID) === toAccount);
    if (!fromAcc || !toAcc) {
        res.status(404).json({ error: 'Account not found ' });
    } 
    if (amount > fromAcc.amount) {
        res.status(400).json({ error: 'Insufficient balance' });
    }

    fromAcc.amount -= amount;
    toAcc.amount += amount;
    fromAcc.transactions.push({ type: 'Debit', amount, date: new Date() });
    toAcc.transactions.push({ type: 'Credit', amount, date: new Date() });
    
    return res.status(200).json({ message: `Amount transfered Successfully from ${fromAccount} to ${toAccount}` });
});

app.get('/transactions/:accountId', (req, res) => {
    const accountID = String(req.params.accountId);
    const account = accounts.find(account => String(account.accountID) === accountID);
    if (!account) {
        res.status(404).json({ error: 'Account not found ' });
    }
    res.status(200).json({ transactions: account.transactions });
});

app.listen(port,()=>{console.log('Server established on port: ',port)});