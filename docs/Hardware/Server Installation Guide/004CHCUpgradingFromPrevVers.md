---
sidebar_position: 3
---

# **Upgrading from CHC Server version 2.2 or 2.3.1**
Only follow these steps when upgrading from Server 2.2 and 2.3.1. Don't perform these steps if you are doing a new installation. For new installations, go straight to [Performing a new installation](005CHCNewInstallations.htm).



Work with Prysm Support (<support@prysm.com>) for authorization to schedule the upgrade:

1. Provide Prysm Support with your database backup file (see [CHC on-site database backup](#CHCDatabaseBacku)).
1. Provide Prysm Support with the number of users in your PAS environment and request a license file.
1. Prysm Support will provide access to the Customer Hosted Cloud - Application Server Deployment Package and to the license file.
1. If you have not received confirmation to perform the upgrade from Prysm Support, don't continue. Wait until you receive confirmation.

Make sure the administrator or engineer has all required sign in credentials (IDs and passwords) in order to be able to perform the tasks in this procedure. If you're unsure of what these are, contact Prsym Support to confirm.

1. Windows credentials as **IIS** user.
1. Database credentials with database owner privileges.
1. Synthesis credentials as **Provisioning** or **Org\_Admin** user.
1. Windows Service Account user name and password.
   This account should not expire, because Prysm won't work with an expired account.
   If SQL server is located on the same machine, this account can be a local Windows account with Administrator privileges. If the SQL server is on a different server, an Active Directory account is recommended.

If you are upgrading from Server 2.2 or if you have renamed your server, you might need some database maintenance prior to upgrading. Contact Prysm Support for assistance.



Before upgrading from Prysm version 2.2 or 2.3.1 to Prysm 2.7, you must back up your database. You can use the installer's automated database backup functionality (see [Performing a new installation](005CHCNewInstallations.htm)), or you can manually back up databases using the following steps:

1. Open SQL Server Management Studio.
1. In the Connect to Server dialog box, change the Server name to **localhost** or the name of your server if you have changed it.
1. Change Authentication to **SQL Server Authentication.**

1. Enter username **DBA** in the sign in field, and enter the required <password> in the password field.
1. Select **Connect.**
1. Expand the database list, and right-click **synthesislocal**, then click **Tasks** and **Back Up**.
1. Select **Disk.**
1. Click **Remove** to remove any existing backup locations.
1. Click **Add** to specify a backup location.
1. Append the name **SynthesislocalBackup\<date>** to the default path and click **OK** on the **Select Backup Destination** window.
1. Click **OK** on the **Back Up Database - synthesislocal** window. A message is displayed if the backup completed successfully.
1. Click **OK** to exit.
1. Navigate to the backup folder and share the database backup with Prysm Support.



1. In IIS, stop the **synthesis-admin** and **synthesis-cloud** sites.
   1. Press WindowsKey+R to open the Run prompt.
   1. Type **InetMgr** and click **OK**.
   1. In the Connections pane, expand the server name and Sites. The synthesis-admin and synthesis-cloud sites are displayed.
   1. Right-click **synthesis-admin** and click **Edit Bindings** to view the ports for the site.
      After the upgrade, the site will be renamed and new ports will be assigned.
   1. Right-click **synthesis-admin** and click **Manage Website - > Stop** to stop the site.

**Note:** If you don't stop the site, the Prysm-admin site will not start after the upgrade because the port will be in use.

1. Right-click **synthesis-cloud** and click **Edit Bindings**.
1. Select the binding, click **Edit**, and edit the **Port** from 4433 to **4435** (or another unused port). This step prevents unexpected port conflicts.
1. Right-click **synthesis-cloud** and click **Manage Website - > Stop** to stop the site.
1. In IIS, stop the Application Pools for synthesis-admin and synthesis-cloud.
   1. In the Connections pane, expand the server name and then **Application Pools**.
   1. Right-click **synthesis-admin** and select **Stop.**
   1. Right-click **synthesis-cloud** and select **Stop.**



1. In Services (Local), right-click **Synthesis Log Service** and select **Stop**.
1. Right-click the **Synthesis Log Service**, select **Properties**, and in the **Startup type** field, select **Disabled**.
   During the upgrade process, the Synthesis Log Service is moved, and disabling the service prevents it from starting and causing port conflicts.

Continue to [Performing a new installation](005CHCNewInstallations.htm) to complete the upgrade.


