import * as React from 'react';
import Link from 'next/link';

export interface IAppProps {
}

export default function NavBar() {
    return (
        <div className="navbar dark:bg-gray-900">
            <div className="flex-1">
                <Link href="/" className="btn btn-ghost normal-case text-xl">GreenARMY Scorecard</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href="/about">About</Link></li>
                    <li className="outline-1">
                        <details>
                            <summary>
                                Chamber
                            </summary>
                            <ul className="p-2 dark:bg-gray-900">
                                <li><Link href="/house">House</Link></li>
                                <li><Link href="/senate">Senate</Link></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    );
}
