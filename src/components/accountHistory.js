import React from 'react';

export default function AccountHistoryList({accountHistory}) {
  //create array accountHistory
    return (
      <li>
        <ul> <br />
          <li>amount: {accountHistory.amount}</li>
          <li>date: {accountHistory.date}</li>
          <li>business: {accountHistory.business}</li>
          <li>name: {accountHistory.name}</li>
          <li>type: {accountHistory.type}</li>
          <li>account: {accountHistory.account}</li>
        </ul>
      </li>
    );
}