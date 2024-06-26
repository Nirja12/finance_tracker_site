<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Personal Finance Tracker</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body  onload="showPrompt()" >
  <div class="container">
    <h1 id="heading" >Personal Finance Tracker</h1>
    <div class="balance">
      <h2>Current Balance: <span id="balance"></span></h2>
    </div>
    <form id="transaction-form">
      <input type="text" id="description" placeholder="Description" required>
      <input type="number" id="amount" placeholder="Amount" required>
      <select id="type" required>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <button type="submit"  onclick="addTransaction()" >Add Transaction</button>
    </form>
    <ul id="transaction-list"></ul>
  </div>

  <!-- ... -->

<main>
    <div class="container">
     
      <div class="transaction-list">
        <h2>Transaction History</h2>
        <table id="transaction-table">
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Action</th>
          </tr>

        </table>
        <div id="balance"></div>
      </div>
    </div>
  </main>
  
  <!-- ... -->
  
  <script src="script.js"></script>
</body>
</html>