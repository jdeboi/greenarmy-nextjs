import * as React from 'react';
import Link from 'next/link';

export interface IAppProps {
}

export default function NavBar() {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">GreenARMY Scorecard</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href="/">Map</Link></li>
                    <li><Link href="/about">About</Link></li>
                </ul>
            </div>
        </div>
    );
}
