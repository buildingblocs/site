import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface TimelineEvent {
  time?: string;
  title: string;
  desc?: string;
  author?: string;
}

interface TimelineDay {
  date: string;
  event: TimelineEvent[];
}

interface Timeline {
  title?: string;
  events: TimelineDay[];
}

type TimelineType = Timeline[];

export default function Timeline({ timeline }: { timeline: TimelineType }) {
  const outerTabs = timeline.map((_) => (
    <TabsTrigger value={_.title ?? ''} key={_.title} className="w-full">
      {_.title}
    </TabsTrigger>
  ));

  const content = timeline.map((event) => (
    <TabsContent value={event.title ?? ''} key={event.title}>
      <Tabs defaultValue={event.events[0].date}>
        <TabsList className="w-full">
          {event.events.map((dateEvent) => (
            <TabsTrigger value={dateEvent.date} key={dateEvent.date} className="w-full">
              {dateEvent.date}
            </TabsTrigger>
          ))}
        </TabsList>
        {event.events.map((dateEvent) => (
          <TabsContent value={dateEvent.date} key={dateEvent.date} className="mx-3 mt-4">
            <ol className="relative border-l border-slate-800">
              {dateEvent.event.map((ev, eventIndex) => (
                <li key={`${dateEvent.date}-${eventIndex}`} className="ml-4 mt-2">
                  <div className="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-slate-800 bg-slate-700" />
                  <time className="mb-1 text-sm text-slate-400">{ev.time}</time>
                  <h3>{ev.title}</h3>
                  <p className="text-slate-300 leading-normal my-0.5">{ev.desc}</p>
                  <p className="text-slate-400 text-sm">{ev.author}</p>
                </li>
              ))}
            </ol>
          </TabsContent>
        ))}
      </Tabs>
    </TabsContent>
  ));

  return (
      <Tabs id="schedule" className="scroll-mt-10" defaultValue={timeline[0].title || ''}>
        {timeline[0].title && <TabsList className="w-full">{outerTabs}</TabsList>}
        {content}
      </Tabs>
  );
}