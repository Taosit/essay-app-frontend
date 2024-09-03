import { Link, useLoaderData, useParams } from "react-router-dom";
import { Essay } from "../components/Essay";
import { Essay as EssayType } from "../types";

export const EssayCorrectionPage = () => {
  const params = useParams();
  const essay = useLoaderData() as EssayType | undefined;

  if (!essay) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Link to={`/essays/${params.id}`}>Back to essay</Link>
      <Essay essay={essay} isEditable showCorrectedEssay />
    </div>
  );
};
