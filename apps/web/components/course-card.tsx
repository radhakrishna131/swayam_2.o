export type CourseCardProps = {
  title: string;
  university: string;
  level: string;
  rating: number;
  hours: number;
};

export function CourseCard(props: CourseCardProps) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-4 inline-flex rounded-full bg-brand-50 px-3 py-1 text-sm font-medium text-brand-600 dark:bg-brand-900/40 dark:text-brand-100">
        {props.level}
      </div>
      <h3 className="text-xl font-semibold">{props.title}</h3>
      <p className="mt-2 text-slate-600 dark:text-slate-300">{props.university}</p>
      <div className="mt-6 flex items-center justify-between text-sm">
        <span aria-label={`${props.rating} out of 5 stars`}>★ {props.rating}</span>
        <span>{props.hours} hours</span>
      </div>
    </article>
  );
}
