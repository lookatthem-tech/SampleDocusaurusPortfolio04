# CHC Server Installation Guide
This guide explains the requirements, specifications, and steps to install a Prysm Customer Hosted Cloud (CHC) Application Server Deployment Package on a customer-provided Virtual Machine (VM) and to connect and configure a Prysm appliance on the CHC server network. 

**Warning:** To ensure that your Prysm appliance operates without error: 

- Do not install third-party software on the Application Server unless it is specifically documented by Prysm.
- Do not update Windows OS device drivers on the Application Server.
- Do not enable Windows update or updates for any installed software on the Application Server.
#### Prysm CHC is intended to be used only by appliances and devices inside a corporate network
If you don't change the default configurations, you can be certain that the entirety of the Prysm Application Server, including Prysm for web, will operate behind the customer's network firewall. Any connection to this Prysm solution presumes that the Prysm appliance or other device used to access Prysm is attached to the customer's corporate network. Any effort to expand access to this customer hosted instance via a VPN or prescribed firewall rules is the sole responsibility of the customer. Customers should confer with their IT or Network Security team well in advance of any implementation of this product.

**Note:** Prysm for web enables users to access Prysm from company issued devices. This guide assumes that access is limited to only devices that are connected to the organization's network. The steps to extend access to Prysm for web outside of a corporate network are beyond the scope of this guide. If you need to extend access to Prysm for web outside your corporate network, Prysm recommends using a secure Virtual Private Network (VPN). VPN access into a private network is the responsibility of the customer or the owner of that network.
#### Managing SAN disk space
Managing SAN disk space mounted to the Prysm server instance is a customer responsibility. Prysm does not monitor the disk utilization of the customer-provided SAN for available space or provide alerts when there is insufficient space for content served by the Prysm Application Server.
#### Prysm services and interfaces
Following the steps in this guide deploys the following Prysm services and interfaces, which are required to operate and manage the Prysm solution within your organization:

- Prysm Collaboration API: This is a restful API used by each Prysm appliance and application services.
- Prysm Web Admin Portal: This portal enables you to configure and manage your Prysm appliances, displays, users, groups, projects, and content.
- Prysm Licensing Service: This service is required for activation and verification of user licenses purchased by your organization.
- Prysm for web: As the name implies, this is Prysm's app to enable you to access your Prysm projects through web browsers on laptops, tablets, and other devices. Hosted Cloud Server Installation and Upgrade Guide
