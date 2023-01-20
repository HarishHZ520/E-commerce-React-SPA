import LoremIpsum from "react-lorem-ipsum";

const ReviewData = [
  {
    id: 1,
    title: "Best Collections ever!",
    content: <LoremIpsum random={false} avgWordsPerSentence={4} />,
  },
  {
    id: 2,
    title: "Enjoyed your services",
    content: <LoremIpsum random={false} avgSentencesPerParagraph={6} />,
  },
  {
    id: 3,
    title: "Online boutique",
    content: <LoremIpsum random={false} avgWordsPerSentence={5} />,
  },
];

export default ReviewData;
