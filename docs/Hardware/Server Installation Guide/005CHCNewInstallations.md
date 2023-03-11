---
sidebar_position: 4
---

# Performing a new installation of CHC Server
After all of the prerequisites have been met, follow these steps to install the Prysm Customer Hosted Cloud - Application Server package:



1. Copy the **Customer Hosted Cloud - Application Server Deployment Package** and extract it to a location on the server. The location on the Application Server is not critical, because you will move the files later. The package must contain the following files and folders:
   1. 2.X\_SettingsTemplate.xml
   1. Synthesis 2.X External Release Notes.pdf
   1. Prysm Application Suite 2.X
   1. SynthesisClientInstaller\_2.X\_All\_Languages.msi
   1. SynthesisClientInstaller\_2.X\_Eng.msi
   1. SynthesisSettingsManager
1. Right-click **Prysm Application Suite 2.x** and click **Run as Administrator**.
1. Accept the terms and proceed through the prompts.
1. From the Prysm Setup dialog box, select the features that you want to install on this system.

   Only the SQL databases can be installed on other VM instances.
1. In the Prysm Application Server section, select **Settings**.
   1. From the IP address list, retain the default selection of **All Unassigned** unless you have specific IP addresses configured in your deployment.
   1. For Host Name, enter the DNS value for PrysmMobile.{CustomerDomain.net}.
   1. In the Port field, edit the port or retain the default value for Port 443. This is the port used to connect to the Prysm cloud.
   1. In the Service User and Service Password fields, enter the user name and password that you want to use as the service owner.
      1. This account should not expire because Prysm won't work if the account expires.
      1. If the SQL server is located on the same machine, this account can be a local Windows account with Administrator privileges. If you are installing under a local Windows account, in the Service User field, enter MachineName\Admin, where the MachineName is the name of your system.
      1. If the SQL server is on a different server, an Active Directory account is recommended. If using Active Directory, the service user name and password must be part of the Administrators group on the PAS local server.
   1. In the Notification E-Mail field, enter an e-mail address where you want notification e-mails from the server to be sent.
   1. From the E-Mail Server section, add the settings for your email server. If you leave the From Address blank, emails are sent with the default from address of no-reply@prysm.com.
   1. Click **OK**.



1. In the Prysm Database section, select **Settings**. 
   The database settings are displayed.
   1. In the Database Server field, specify the name of the server where SQL Server is installed.
   1. In the Database Name field, edit the name or retain the default database name, **synthesislocal**.
   1. Select a database connection method by retaining **Trusted (Windows Authentication)** or entering a user name and password to connect to the SQL server. Then click **Test Connection** to verify that you can make a successful database connection.
   1. Leave the **Create Backup** check box selected to create a database backup.
      By default, the backup is saved in the **Program Files/Prysm/databasebackups** folder.
1. In the License Database section, select **Settings**.
   1. In the Database Server field, specify the name of the server where SQL Server is installed.
   1. In the Database Name field, edit the name or retain the default database name, which is **licensing**.
   1. Select a database connection method by retaining **Trusted (Windows Authentication)**, or entering a username and password to connect to the SQL server, and click **Test Connection** to verify that you can make a successful database connection.If you retain the Trusted (Windows Authentication) option, the current user account must have sysadmin permission on the SQL database server. If you enter a username and password for SQL Authentication, the database sign in must have sysadmin permission so that the databases are created.
   1. Leave the **Create Backup** checkbox selected to create a database backup.
      By default, the backup is saved in the Program Files/Prysm/databasebackups folder.
1. In the Prysm Admin Server section, select **Settings**.
   1. From the IP Address dropdown, verify the IP address for the network adapter or leave unassigned if using a VM.
   1. Retain the default port setting of 4433.
1. In the **Installation Folder** field, edit the installation folder to install the Prysm Application Suite in a different location.

**Warning:** If you install the Prysm Application Suite in another location, Prysm recommends selecting a top level folder. You may experience Windows filename length errors if you select a nested folder for the installation.

1. If you are installing the Prysm Application Suite on more than one server, edit the Server Mappings to correctly configure the installation.
   1. Click **Server Mappings**.
   1. Edit the server mappings to match the DNS entries configured in section 2.3 then select **OK**.
1. Select **File** then **SSL Certificate Publisher.**
   1. Configure a Trusted Certificate.

**Note:** The SSL Certificate Publisher updates certificates for the Prysm Application Server and Prysm Mobile applications. It does not update certificates for the Web Admin. For information, see Appendix D. Troubleshooting.

1. Select **Install** when ready to implement the Certificate.

**Warning:** If you do not use a certificate of authority, web browsers such as Safari and browsers on mobile devices may not be able to access the sites. On browsers that can access the sites, each time they visit they will be presented with a warning message and have to navigate through the prompts to proceed to the sites.
Prysm recommends customers use a valid Certificate of Authority over the default Self Signed Certificate built into the package. Prysm is not a supplier of Certificates of Authority.

1. Select **File** then **Client Publisher.**
   1. In the Cloud Url textbox, enter the **Cloud Server** mapping from section 2.3.
   1. If you have already provided a trusted certificate, do **NOT** select the **Self Signed Certificate** checkbox.
   1. Select **Browse** and then select the Prysm Application Suite Client Installer from the Customer Hosted Cloud - Application Server Deployment Package.
1. Select **Apply Changes** to install.
   The progress bar shows which component is being installed and the status of the process. A confirmation message is displayed when all components are successfully installed. If you experience installation errors, see Appendix D. Troubleshooting.
1. Copy the ReleaseNotes.pdf from the Customer Hosted Cloud - Application Server Deployment Package and paste them into the installation folder (by default, c:\Program Files\Prysm).
1. Through IIS, verify that the Prysm Admin site (https://{Admin DNS entry from section 2.3}:4433:) has been installed and started. Select **Br owse Website** to verify that you can connect.



There could be issues in production Customer Hosted Cloud deployments with Redis consuming too much disk space. Physical files are used to back up the Redis database, however since all information in the Redis database is also stored in SQL server, it is not necessary to create the redis backup files. To accomplish this, the redis config file needs to have the persistence-available setting set to NO. This disables the persistence of the redis database. By default the Redis physical files are stored in: C:\Windows\ServiceProfiles\NetworkService\AppData\Local\Redis

To verify that the Prysm Application Suite works with Redis persistence off, the WPF client should be used with a server configured with Redis persistence turned off. The server should be rebooted to clear the Redis in-memory cache to simulate a server crash. After the server restarts, the WPF client should be used again to determine if the system still functions.

To edit the redis.windows.conf file, perform the following steps:

1. Navigate to the redis.windows.conf file.
1. Stop the Redis service.

**Warning:** When you stop Redis, all currently logged in participants will be logged out automatically. They will not be able to sign in again until Redis is restarted.

1. Go to the section "SNAPSHOTTING" and remove all settings.
1. Go to the section "APPEND ONLY MODE" and remove all settings.
1. Go to the section "LIMITS" and make the following settings changes:
   1. remove maxheap
   1. assign persistence-available to "no" (no quotes)
   1. assign maxmemory to desired max memory in bytes
1. Once the changes are made, restart the Redis service.
1. When Redis restarts all active sessions will be terminated.

**Tip:** It is important to assign the maxmemory since the maxheap setting isn't respected once persistence is removed. Unless Redis is installed on its own machine, other Prysm services could experience memory pressure since Redis will consume up to the available ram.

1. To verify, log back into the Prysm Application Suite. If you are unable to sign in, the settings are not correct. If you are able to sign in, the settings have been edited.



To see if the server is up and running, follow these steps:

1. Open the Task Manager and make sure the following tasks are running: 
   1. Synthesis.Cloud
   1. Synthesis.LogService
   1. Synthesis.Transcode.Web
   1. Synthesis.UploadService
1. Open the Google Chrome web browser and navigate to http://localhost:3400/macroviewer/service.
1. A security warning from Google Chrome appears.
1. Select **Advanced** and then Proceed to Site.
1. In the browser navigation bar, enter the computer name to navigate to Prysm Mobile and verify that you can log in.

**Note:** Installation Logs can be found at this path:

C:\Users\[USERNAME]\AppData\Local\Temp

The AppData folder is a hidden folder. Enable View Hidden Folders to view it.


