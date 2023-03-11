---
sidebar_position: 9
---

# Using Guest Mode with CHC
Prysm doesn't recommend the use of Guest Mode in a Customer Hosted Cloud environment. Guest Mode is designed to let users without a Prysm user license access content in Prysm. In order to do this in a CHC environment, guest users, potentially from outside the customer organization, will need access to the same network domain where the CHC server resides. In many customer networks, this is an issue because there is a separate network on a separate domain dedicated to guest users.

In order to allow Guest Mode to function properly, customers are responsible for security and must allow Guest Mode users onto the network that hosts the CHC server.

