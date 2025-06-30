import React from 'react';
import {Link} from "react-router-dom";
import { PlusIcon } from 'lucide-react';
import ThemeToggle from './ThemeToggle';


const Navbar = () => {
  return (
    <header className='bg-base-300 border-b border-base-content/10'>
        <div className='mx-auto max-w-6xl p-4'>
            <div className='flex items-center justify-between'>
                <h1 className='text-3xl font-bold text-primary font-mono tracking-tight'>MindDesk</h1>
                <div>
                    <Link to={"/create"} className="btn btn-primary">
                      <PlusIcon className="size-5" />
                      <span>New note</span>
                    </Link>




                </div>
                <ThemeToggle/>
            </div>
        </div>

    </header>
  )
}

export default Navbar