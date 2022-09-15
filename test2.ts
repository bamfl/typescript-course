enum TopicStatus {
  PUBLISHED = 'published',
  DRAFT = 'draft',
  DELETED = 'deleted'
}

type TopicRequest = {
  topicId: number;
  status?: TopicStatus
}

type Topic = {
  question: string,
  answer: string,
  tags: [
    string,
    string
  ],
  likes: number,
  status: TopicStatus
}

async function getFaqs(req: TopicRequest): Promise<Topic[]> {
  const res = await fetch('/faqs', {
    method: 'POST',
    body: JSON.stringify(req)
  });

  const data = await res.json() as Promise<Topic[]>;

  return data;
}

const topic = {
  topicId: 5,
  status: TopicStatus.PUBLISHED // "draft", "deleted" - optional
}

getFaqs(topic);