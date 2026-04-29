type AboutSectionProps = {
  title: string;
  paragraphs: string[];
};

export default function AboutSection({ title, paragraphs }: AboutSectionProps) {
  return (
    <section id="about_me" className="about">
      <h2 className="about__title">{title}</h2>

      {paragraphs.map((paragraph) => (
        <p key={paragraph} className="about__text">
          {paragraph}
        </p>
      ))}
    </section>
  );
}