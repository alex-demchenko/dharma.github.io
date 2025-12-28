enum Tags {
  Level_Beginner = "Уровень-Начинающий",
}

interface Book {
  tags: Tags[];
  name: string;
  author: string;
  desc?: string;
}

export const books: Book[] = [
  {
    tags: [Tags.Level_Beginner],
    name: "Путеводитель по Буддизму",
    author: "Елена Леонтьева",
  },
];
