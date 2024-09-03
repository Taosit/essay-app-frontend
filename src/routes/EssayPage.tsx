import {
  Link,
  useFetcher,
  useLoaderData,
  useNavigate,
  useParams,
} from "react-router-dom";
import { EssayWithToggles } from "../components/EssayWithToggles";
import { Essay } from "../types";
import { deleteEssay } from "../api/essay";

export const EssayPage = () => {
  const params = useParams();
  const essay = useLoaderData() as Essay | undefined;
  const navigate = useNavigate();
  const fetcher = useFetcher();

  if (!essay) {
    return <div>Loading...</div>;
  }

  const id = params.id ? parseInt(params.id) : undefined;

  const handleDelete = async () => {
    await deleteEssay(id!);
    fetcher.load("/");
    navigate("/");
  };

  return (
    <div>
      <div className="essay-page-header">
        <div>
          <Link to="/">All essays</Link>
          <br />
          <Link to={`/essays/${id}/correction`}>Correct this essay</Link>
        </div>
        <div>
          <input type="hidden" name="essayId" value={params.id} />
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
      <EssayWithToggles essay={essay} />
    </div>
  );
};
