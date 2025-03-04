import { InitialMigration1588102412422 } from './1588102412422-InitialMigration';
import { WebhookModel1592445003908 } from './1592445003908-WebhookModel';
import { CreateIndexStoppedAt1594825041918 } from './1594825041918-CreateIndexStoppedAt';
import { AddWebhookId1611071044839 } from './1611071044839-AddWebhookId';
import { MakeStoppedAtNullable1607431743769 } from './1607431743769-MakeStoppedAtNullable';
import { CreateTagEntity1617213344594 } from './1617213344594-CreateTagEntity';
import { UniqueWorkflowNames1620821879465 } from './1620821879465-UniqueWorkflowNames';
import { AddWaitColumn1621707690587 } from './1621707690587-AddWaitColumn';
import { UpdateWorkflowCredentials1630330987096 } from './1630330987096-UpdateWorkflowCredentials';
import { AddExecutionEntityIndexes1644421939510 } from './1644421939510-AddExecutionEntityIndexes';
import { CreateUserManagement1646992772331 } from './1646992772331-CreateUserManagement';
import { LowerCaseUserEmail1648740597343 } from './1648740597343-LowerCaseUserEmail';
import { AddUserSettings1652367743993 } from './1652367743993-AddUserSettings';
import { CommunityNodes1652254514001 } from './1652254514001-CommunityNodes';
import { AddAPIKeyColumn1652905585850 } from './1652905585850-AddAPIKeyColumn';
import { IntroducePinData1654089251344 } from './1654089251344-IntroducePinData';
import { AddNodeIds1658930531669 } from './1658930531669-AddNodeIds';
import { AddJsonKeyPinData1659888469333 } from './1659888469333-AddJsonKeyPinData';
import { CreateCredentialsUserRole1660062385367 } from './1660062385367-CreateCredentialsUserRole';
import { CreateWorkflowsEditorRole1663755770892 } from './1663755770892-CreateWorkflowsUserRole';
import { CreateCredentialUsageTable1665484192211 } from './1665484192211-CreateCredentialUsageTable';
import { RemoveCredentialUsageTable1665754637024 } from './1665754637024-RemoveCredentialUsageTable';
import { AddWorkflowVersionIdColumn1669739707124 } from './1669739707124-AddWorkflowVersionIdColumn';
import { WorkflowStatistics1664196174000 } from './1664196174000-WorkflowStatistics';
import { AddTriggerCountColumn1669823906993 } from './1669823906993-AddTriggerCountColumn';
import { RemoveWorkflowDataLoadedFlag1671726148419 } from './1671726148419-RemoveWorkflowDataLoadedFlag';
import { MessageEventBusDestinations1671535397530 } from './1671535397530-MessageEventBusDestinations';
import { DeleteExecutionsWithWorkflows1673268682475 } from './1673268682475-DeleteExecutionsWithWorkflows';
import { CreateLdapEntities1674509946020 } from './1674509946020-CreateLdapEntities';
import { PurgeInvalidWorkflowConnections1675940580449 } from './1675940580449-PurgeInvalidWorkflowConnections';
import { AddStatusToExecutions1674138566000 } from './1674138566000-AddStatusToExecutions';
import { MigrateExecutionStatus1676996103000 } from './1676996103000-MigrateExecutionStatus';
import { UpdateRunningExecutionStatus1677237073720 } from './1677237073720-UpdateRunningExecutionStatus';
import { CreateExecutionMetadataTable1679416281777 } from './1679416281777-CreateExecutionMetadataTable';

const sqliteMigrations = [
	InitialMigration1588102412422,
	WebhookModel1592445003908,
	CreateIndexStoppedAt1594825041918,
	AddWebhookId1611071044839,
	MakeStoppedAtNullable1607431743769,
	CreateTagEntity1617213344594,
	UniqueWorkflowNames1620821879465,
	AddWaitColumn1621707690587,
	UpdateWorkflowCredentials1630330987096,
	AddExecutionEntityIndexes1644421939510,
	CreateUserManagement1646992772331,
	LowerCaseUserEmail1648740597343,
	AddUserSettings1652367743993,
	CommunityNodes1652254514001,
	AddAPIKeyColumn1652905585850,
	IntroducePinData1654089251344,
	AddNodeIds1658930531669,
	AddJsonKeyPinData1659888469333,
	CreateCredentialsUserRole1660062385367,
	CreateWorkflowsEditorRole1663755770892,
	CreateCredentialUsageTable1665484192211,
	RemoveCredentialUsageTable1665754637024,
	AddWorkflowVersionIdColumn1669739707124,
	WorkflowStatistics1664196174000,
	AddTriggerCountColumn1669823906993,
	RemoveWorkflowDataLoadedFlag1671726148419,
	MessageEventBusDestinations1671535397530,
	DeleteExecutionsWithWorkflows1673268682475,
	CreateLdapEntities1674509946020,
	PurgeInvalidWorkflowConnections1675940580449,
	AddStatusToExecutions1674138566000,
	MigrateExecutionStatus1676996103000,
	UpdateRunningExecutionStatus1677237073720,
	CreateExecutionMetadataTable1679416281777,
];

export { sqliteMigrations };
