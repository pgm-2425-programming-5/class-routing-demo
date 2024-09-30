const DynamicPage = ({ params }: { params: { id: string } }) => {


    return (
        <div>
            <h1>Dynamic Page</h1>
            <p>The ID from the URL is: {params.id}</p>
        </div>
    );
};

export default DynamicPage;