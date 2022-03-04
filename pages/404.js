import ROUTES from "@utils/routes";
import Link from "next/link";

export default function PageNotFound() {
    return (
        <>
            <div>
                <div className="flex flex-col justify-between min-h-screen">
                    <div className="p-5 py-32 text-center">
                        <h1 className="text-2xl md:text-5xl text-primary mb-2">404</h1>
                        <h2 className="text-xl md:text-3xl text-primary mb-1">Oops! Page not found</h2>
                        <p className="text-muted mb-5">
                            Let&apos;s take you back to the homepage, it&apos;s beautiful there!
                        </p>
                        <Link href={ROUTES.HOME}>
                            <a>
                                <button
                                    className="flex-shrink-0 transition-all bg-primary text-sm text-white py-3 px-5 rounded"
                                    type="button"
                                >
                                    Back to Home
                                </button>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
