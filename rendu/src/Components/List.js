/*import { useGetArticlesQuery,  } from "../Services/API"

export default function () {

    let { data, isFetching } = useGetArticlesQuery()
    let [ createArticle, { isLoading } ] = useCreateArticleMutation()

    return <div>Home
        {
            isFetching ? <p>ça fetch</p> : <div>

                <br />
                Articles Count: {data.length}
                <ArticlesList />

            </div>
        }
    </div>
}

function ArticlesList() {

    let { data, isFetching } = useGetArticlesQuery()

    return data.map((article) => {
        return <h3>{article.title}</h3>
    })

}


 */