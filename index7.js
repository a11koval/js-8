const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
  };
  
  const account = {
    balance: 0,
    transactions: [],
    
    createTransaction(amount, type) {
      return { id: this.transactions.length + 1, type, amount };
    },
    
    deposit(amount) {
      this.balance += amount;
      this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
    },
    
    withdraw(amount) {
      if (amount > this.balance) return console.log('Недостатньо коштів');
      this.balance -= amount;
      this.transactions.push(this.createTransaction(amount, Transaction.WITHDRAW));
    },
    
    getBalance() {
      return this.balance;
    },
    
    getTransactionDetails(id) {
      return this.transactions.find(({ id: tid }) => tid === id) || null;
    },
    
    getTransactionTotal(type) {
      return this.transactions.reduce((total, { amount, type: t }) => t === type ? total + amount : total, 0);
    }
  };
  