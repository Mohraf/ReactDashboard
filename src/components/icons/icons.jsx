function HomeIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
    )
}


function TvIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            {/* TV screen */}
            <rect x="2" y="2" width="20" height="15" />

            {/* TV stand */}
            <polyline points="7 17 12 22 17 17" />
        </svg>
    );
}


function CarIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            {/* Body of the car */}
            <rect x="2" y="10" width="20" height="8" rx="2" ry="2" />

            {/* Roof of the car */}
            <rect x="6" y="6" width="12" height="4" rx="1" ry="1" />

            {/* Front wheel */}
            <circle cx="7" cy="18" r="3" />

            {/* Back wheel */}
            <circle cx="17" cy="18" r="3" />
        </svg>
    );
}


function DocumentIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            {/* Document stack */}
            <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />

            {/* Folded corner */}
            <path d="M14 2H20L10 12" />
        </svg>
    );
}


function SettingsIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    )
}


function ShoppingCartIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </svg>
    )
}


function UsersIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    )
}


function LocationPinIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            {/* Pin body */}
            <circle cx="12" cy="12" r="8" />

            {/* Pin point */}
            <path d="M12 2v12" />
        </svg>
    );
}


function FreightContainerIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            {/* Container body */}
            <rect x="4" y="4" width="16" height="16" />

            {/* Container doors */}
            <path d="M4 4v16M8 4v16" />

            {/* Door handles */}
            <circle cx="6" cy="12" r="1" />
            <circle cx="18" cy="12" r="1" />
        </svg>
    );
}


function TractorIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            {/* Body of the tractor */}
            <rect x="5" y="11" width="14" height="5" />
            <rect x="6" y="6" width="12" height="5" />

            {/* Cabin of the tractor */}
            <rect x="8" y="1" width="8" height="5" />

            {/* Front wheel */}
            <circle cx="7" cy="17" r="3" />

            {/* Back wheel */}
            <circle cx="17" cy="17" r="3" />
        </svg>
    );
}


function TicketIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            {/* Main ticket body */}
            <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />

            {/* Perforation lines */}
            <line x1="8" y1="4" x2="8" y2="8" />
            <line x1="16" y1="4" x2="16" y2="8" />
            <line x1="4" y1="8" x2="20" y2="8" />

            {/* Circular perforations */}
            <circle cx="8" cy="16" r="1" />
            <circle cx="16" cy="16" r="1" />
        </svg>
    );
}


function BottleIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            {/* Bottle cap */}
            <circle cx="12" cy="6" r="1.5" />

            {/* Bottle neck */}
            <path d="M12 7v5" />

            {/* Bottle body */}
            <path d="M12 12c-2 0-3.5 1.5-3.5 3.5S10 19 12 24s3.5-4.5 3.5-8.5S14 12 12 12z" />
        </svg>
    );
}



export { HomeIcon, TvIcon, CarIcon, DocumentIcon, SettingsIcon, ShoppingCartIcon, UsersIcon, LocationPinIcon, FreightContainerIcon, TractorIcon, TicketIcon, BottleIcon }