

const Admin = () => {
    return (
        <section className="mt-24">

            <div className="w-1/4 m-auto text-center my-[18%]">
                <h1 className="text-3xl font-semibold mb-5">Admin Dashboard</h1>
                <form action="" className="w-full flex-col items-center justify-between ">
                    <input type="email" placeholder="Email" className=" w-full border border-gray-600 p-2 rounded" />
                    <input type="password" placeholder="Password" className=" w-full border border-gray-600 p-2 rounded my-5" />
                    <input type="button" value="Sign In" className=" bg-teal-700  w-full p-2 rounded text-white" />

                </form>
                <p className="text-red-400 py-4 text-xl"></p>
            </div>
        </section>
    )
}

export default Admin