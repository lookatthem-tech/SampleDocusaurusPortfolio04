---
sidebar_position: 10
---

# Uninstalling a CHC server
You can uninstall Prysm from a Customer Hosted Prysm Application Server (VM). After uninstalling, the server is returned to the state it was in when the 2.7.x PAS installer was run. For example, if the server was upgraded from 2.3.1 to 2.7.x, the uninstall process returns the server to the 2.3.1 level. If the server had a new install for version 2.7.x, the uninstall process removes Prysm completely.

Uninstalling does not remove data, including the synthesislocal or licensing SQL databases.

1. From the Windows Control Panel, select **Add or Remove Programs**.
1. Select **Prysm Application Suite 2.x** and click **Uninstall**.
   The Prysm Setup screen is displayed with all installed components selected.
1. Clear the check boxes for the components you want to uninstall and click **Apply Changes**.
   The green status bar indicates the uninstall progress. When complete, a confirmation of the installation change appears.


