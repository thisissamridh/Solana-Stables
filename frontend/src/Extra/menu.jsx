
<Menu as="div" className="relative">
    <div>
        <Menu.Button className="ml-2 bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
            <span className="sr-only">Open user menu</span>
            <div
                className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center"
                style={{ backgroundImage: 'url("https://source.unsplash.com/80x80?face")' }}
            >
                <span className="sr-only">Marc Backes</span>
            </div>
        </Menu.Button>
    </div>
    <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
    >
        <Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Menu.Item>
                {({ active }) => (
                    <div
                        onClick={() => navigate('/profile')}
                        className={classNames(
                            active && 'bg-gray-100',
                            'active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200'
                        )}
                    >
                        Your Profile
                    </div>
                )}
            </Menu.Item>
            <Menu.Item>
                {({ active }) => (
                    <div
                        onClick={() => navigate('/settings')}
                        className={classNames(
                            active && 'bg-gray-100',
                            'active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200'
                        )}
                    >
                        Settings
                    </div>
                )}
            </Menu.Item>
            <Menu.Item>
                {({ active }) => (
                    <div
                        className={classNames(
                            active && 'bg-gray-100',
                            'active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200'
                        )}
                    >
                        Sign out
                    </div>
                )}
            </Menu.Item>
        </Menu.Items>
    </Transition>
</Menu>