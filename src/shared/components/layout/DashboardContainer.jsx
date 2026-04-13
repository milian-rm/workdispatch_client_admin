import { Navbar } from "./Navbar";
import { Sidebar } from "./SideBar";

export const DashboardContainer = ({ children }) => {
    return(
        <div className="min-h screen bg-gray-50 flex flex-col">
            {/* Navbar */}
            <Navbar />
            <div className="flex flex">
                {/* Sidebar */}
                <Sidebar />
                <main className="flex-1 p-6">
                    {/* Children */}
                    Contenido del menú
                </main>
            </div>
        </div>
    )
}