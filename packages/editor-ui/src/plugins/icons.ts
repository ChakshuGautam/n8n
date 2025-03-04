import Vue from 'vue';

import { IconDefinition, library } from '@fortawesome/fontawesome-svg-core';
import {
	faAngleDoubleLeft,
	faAngleDown,
	faAngleLeft,
	faAngleRight,
	faAngleUp,
	faArrowLeft,
	faArrowRight,
	faAt,
	faBan,
	faBolt,
	faBook,
	faBoxOpen,
	faBug,
	faCalculator,
	faCalendar,
	faChartBar,
	faCheck,
	faCheckCircle,
	faCheckSquare,
	faChevronDown,
	faChevronUp,
	faChevronLeft,
	faChevronRight,
	faCode,
	faCodeBranch,
	faCog,
	faCogs,
	faClock,
	faClone,
	faCloud,
	faCloudDownloadAlt,
	faCopy,
	faCube,
	faCut,
	faDotCircle,
	faEdit,
	faEllipsisV,
	faEnvelope,
	faEye,
	faExclamationTriangle,
	faExpand,
	faExpandAlt,
	faExternalLinkAlt,
	faExchangeAlt,
	faFile,
	faFileAlt,
	faFileArchive,
	faFileCode,
	faFileDownload,
	faFileExport,
	faFileImport,
	faFilePdf,
	faFilter,
	faFingerprint,
	faFlask,
	faFolderOpen,
	faFont,
	faGlobeAmericas,
	faGift,
	faGlobe,
	faGraduationCap,
	faGripVertical,
	faHandPointLeft,
	faHashtag,
	faHdd,
	faHome,
	faHourglass,
	faImage,
	faInbox,
	faInfo,
	faInfoCircle,
	faKey,
	faLink,
	faList,
	faLightbulb,
	faMapSigns,
	faMousePointer,
	faNetworkWired,
	faPause,
	faPauseCircle,
	faPen,
	faPencilAlt,
	faPlay,
	faPlayCircle,
	faPlug,
	faPlus,
	faPlusCircle,
	faPlusSquare,
	faQuestion,
	faQuestionCircle,
	faRedo,
	faRss,
	faSave,
	faSatelliteDish,
	faSearch,
	faSearchMinus,
	faSearchPlus,
	faServer,
	faSignInAlt,
	faSignOutAlt,
	faSlidersH,
	faSpinner,
	faStop,
	faSun,
	faSync,
	faSyncAlt,
	faTable,
	faTasks,
	faTerminal,
	faThLarge,
	faThumbtack,
	faTimes,
	faTimesCircle,
	faToolbox,
	faTrash,
	faUndo,
	faUnlink,
	faUser,
	faUserCircle,
	faUserFriends,
	faUsers,
	faVideo,
	faTree,
	faStickyNote as faSolidStickyNote,
	faUserLock,
} from '@fortawesome/free-solid-svg-icons';
import { faStickyNote } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function addIcon(icon: any) {
	library.add(icon as IconDefinition);
}

addIcon(faAngleDoubleLeft);
addIcon(faAngleDown);
addIcon(faAngleLeft);
addIcon(faAngleRight);
addIcon(faAngleUp);
addIcon(faArrowLeft);
addIcon(faArrowRight);
addIcon(faAt);
addIcon(faBan);
addIcon(faBolt);
addIcon(faBook);
addIcon(faBoxOpen);
addIcon(faBug);
addIcon(faCalculator);
addIcon(faCalendar);
addIcon(faChartBar);
addIcon(faCheck);
addIcon(faCheckCircle);
addIcon(faCheckSquare);
addIcon(faChevronLeft);
addIcon(faChevronRight);
addIcon(faChevronDown);
addIcon(faChevronUp);
addIcon(faCode);
addIcon(faCodeBranch);
addIcon(faCog);
addIcon(faCogs);
addIcon(faClock);
addIcon(faClone);
addIcon(faCloud);
addIcon(faCloudDownloadAlt);
addIcon(faCopy);
addIcon(faCube);
addIcon(faCut);
addIcon(faDotCircle);
addIcon(faGripVertical);
addIcon(faEdit);
addIcon(faEllipsisV);
addIcon(faEnvelope);
addIcon(faEye);
addIcon(faExclamationTriangle);
addIcon(faExpand);
addIcon(faExpandAlt);
addIcon(faExternalLinkAlt);
addIcon(faExchangeAlt);
addIcon(faFile);
addIcon(faFileAlt);
addIcon(faFileArchive);
addIcon(faFileCode);
addIcon(faFileDownload);
addIcon(faFileExport);
addIcon(faFileImport);
addIcon(faFilePdf);
addIcon(faFilter);
addIcon(faFingerprint);
addIcon(faFlask);
addIcon(faFolderOpen);
addIcon(faFont);
addIcon(faGift);
addIcon(faGlobe);
addIcon(faGlobeAmericas);
addIcon(faGraduationCap);
addIcon(faHandPointLeft);
addIcon(faHashtag);
addIcon(faHdd);
addIcon(faHome);
addIcon(faHourglass);
addIcon(faImage);
addIcon(faInbox);
addIcon(faInfo);
addIcon(faInfoCircle);
addIcon(faKey);
addIcon(faLink);
addIcon(faList);
addIcon(faLightbulb);
addIcon(faMapSigns);
addIcon(faMousePointer);
addIcon(faNetworkWired);
addIcon(faPause);
addIcon(faPauseCircle);
addIcon(faPen);
addIcon(faPencilAlt);
addIcon(faPlay);
addIcon(faPlayCircle);
addIcon(faPlug);
addIcon(faPlus);
addIcon(faPlusCircle);
addIcon(faPlusSquare);
addIcon(faQuestion);
addIcon(faQuestionCircle);
addIcon(faRedo);
addIcon(faRss);
addIcon(faSave);
addIcon(faSatelliteDish);
addIcon(faSearch);
addIcon(faSearchMinus);
addIcon(faSearchPlus);
addIcon(faServer);
addIcon(faSignInAlt);
addIcon(faSignOutAlt);
addIcon(faSlidersH);
addIcon(faSpinner);
addIcon(faSolidStickyNote);
addIcon(faStickyNote);
addIcon(faStop);
addIcon(faSun);
addIcon(faSync);
addIcon(faSyncAlt);
addIcon(faTable);
addIcon(faTasks);
addIcon(faTerminal);
addIcon(faThLarge);
addIcon(faThumbtack);
addIcon(faTimes);
addIcon(faTimesCircle);
addIcon(faToolbox);
addIcon(faTrash);
addIcon(faUndo);
addIcon(faUnlink);
addIcon(faUser);
addIcon(faUserCircle);
addIcon(faUserFriends);
addIcon(faUsers);
addIcon(faVideo);
addIcon(faTree);
addIcon(faUserLock);

Vue.component('font-awesome-icon', FontAwesomeIcon);
