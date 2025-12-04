import { FC } from 'react';
import { ArticleDetails } from 'entities/Article';
import { Card } from 'shared/ui/Card';
import { useParams } from 'react-router-dom';

interface DetailsContainerProps {
  className?: string;
}

export const DetailsContainer: FC<DetailsContainerProps> = (props) => {
  const { className } = props;
  const { id } = useParams();

  if (!id) {
    return null;
  }

  return (
    <Card className={className} padding='24' max>
      <ArticleDetails id={id} />
    </Card>
  );
};
