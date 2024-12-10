const FullStackDeveloperPage = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold text-primary text-center mb-8">
                Full-stack Developer
            </h1>
            <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 sm:p-8 md:p-10">
                {/* Requirements Section */}
                <section className="mb-6">
                    <h2 className="text-2xl font-bold text-secondary mb-4">
                        Requirements:
                    </h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Proficiency in Laravel, Vue.js, JavaScript, HTML/CSS, and MySQL/PostgreSQL.</li>
                        <li>Experience with RESTful APIs, Git, and responsive design.</li>
                        <li>Strong problem-solving and teamwork skills.</li>
                    </ul>
                </section>

                {/* Preferred Section */}
                <section className="mb-6">
                    <h2 className="text-2xl font-bold text-secondary mb-4">
                        Preferred:
                    </h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Knowledge of React/Angular, DevOps, or automated testing.</li>
                    </ul>
                </section>

                {/* Offer Section */}
                <section>
                    <h2 className="text-2xl font-bold text-secondary mb-4">
                        Offer:
                    </h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Salary: 300–350k (based on experience).</li>
                        <li>Supportive and innovative work environment.</li>
                    </ul>
                </section>

                {/* Application Section */}
                <section className="mt-6">
                    <p className="text-gray-700">
                        <strong>Apply:</strong> Send CV and portfolio to <a href="mailto:Themo.recruitment@gmail.com" className="text-blue-600 underline">Themo.recruitment@gmail.com</a>.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default FullStackDeveloperPage;
