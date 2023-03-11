---
sidebar_position: 8
---

# **Configuring the appliance for the CHC server**
To confirm an appliance configuration and deployment to a CHC server environment, complete these procedures (which are detailed in the following sections):

1. Connect NIC1 of the appliance to the CHC server.
1. Verify that the appliance can link to the Customer Hosted Cloud Server.
1. Sign in to WebAdmin on the appliance and download the current Release 2.x Prysm Application Suite (PAS) Software.
   1. The C:\Synthesis folder should be prepped for install by manufacturing, containing a single file Synthesis.exe.config. If not, go to Preparing appliances to be used in a CHC, and perform those steps before continuing.
1. Verify that a deployment has been created in WebAdmin, specifying the MachineKey of the appliance.
1. Verify the Synthesis.exe.config file settings (confirm that the Cloud URI and Machine Key variables are encrypted).
1. Launch Prysm and authenticate using the Org Admin user account.


1. Connect NIC1 of the appliance to the same network switch or VLAN to which the CS NIC1 is connected and configured.
1. Verify that the appliance network is configured to the same network as the server WebAPI. (IP schema must match).


1. Open a web browser and enter either an IP or FQDN address. (Example: https://192.168.1.186:4433 or https://FQDN:4433).
1. If a security error pops up select advanced and proceed.
1. This should take you to the Web Admin.
1. Close the browser.


**Note:** Before downloading the appliance PAS upgrade software package to the appliance, the Msi Modifier utility must be executed on the PAS Server. See [Performing a new installation of CHC Server](005CHCNewInstallations.htm).

1. Open a web browser and enter either an IP or FQDN address. (Example: https://192.168.1.186:4433 or https://FQDN:4433).
1. If a security error pops up, select advanced and proceed.
1. Sign in as Org Administrator using your Org Admin user name and password.
1. Select **Installation**.
1. Select **Download** to download PAS software on the appliance.
1. Select **keep files** if you encounter a security warning.
1. Navigate to the **Downloads** folder.
1. Right-click and select **Properties**.
1. Select **Un-block** near the lower right of the Properties window, apply changes.


1. Open a web browser and enter https://WebAdminIP (Example: https://192.168.1.186).
1. If a security error pops up, select advanced and proceed.
1. Sign in as Org Administrator using your Org Admin user name and password.
1. Verify that the Machine Key for the Deployment is the Prysm Serial Number (not the HP serial number) printed on the sticker on the appliance. Typically, these are 10-character numeric serial numbers.
1. If a deployment hasn't been created, see [Creating deployments](006CHCConfigureNewAcct.htm#A) for instructions on how to create one.


1. In the Web Admin, select **Settings**.
1. Click the **Edit** button for the Settings Profile.
1. Expand the Server list and select **Logging**.
1. Edit the Logging Remote Hostname to say udp:{WebAdminIP} where {WebAdminIP} is the value used earlier (Example: 192.168.1.186).
1. Select **Save**.

**Note:** Perform the preceding steps on every Settings Profile in use.


1. Launch **Prysm**. (Double-click the **P** icon on the desktop or in the C:\Synthesis folder).
1. Verify that the current version of Prysm is downloaded and installed on the appliance from WebAdmin.
1. Verify that a WebAdmin deployment was created with the correct appliance MachineKey/Computer Name.
1. Sign in as Org Administrator using your Org Admin user name and password.
1. When you can sign in and open a workspace, the testing is complete.

