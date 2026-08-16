import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ScheduleItem {
    _key: string;
    timing?: string;
    title: string;
    desc?: string;
    author?: string;
}

interface DayItem {
    _key: string;
    day: string;
    daySchedule: ScheduleItem[];
}

interface TimelineTrack {
    _key: string;
    track?: string;
    days: DayItem[];
}

type TimelineType = TimelineTrack[];

export default function Timeline({ timeline }: { timeline: TimelineType }) {
    const outerTabs = timeline.map((trackItem) => (
        <TabsTrigger value={trackItem._key} key={trackItem._key}
                     className="w-full button bg-slate-700 hover:bg-slate-800 data-[state=active]:bg-slate-800/75">
            {trackItem.track}
        </TabsTrigger>
    ));

    const content = timeline.map((trackItem) => (
        <TabsContent value={trackItem._key} key={trackItem._key}>
            <Tabs defaultValue={trackItem.days[0]?._key} className="flex-col">
                <TabsList className="w-full gap-x-1 rounded-[calc(1rem)] bg-slate-900 border border-white/15">
                    {trackItem.days.map((dayItem) => (
                        <TabsTrigger value={dayItem._key} key={dayItem._key}
                                     className="w-full button bg-slate-700 hover:bg-slate-800 data-[state=active]:bg-slate-800/75">
                            {dayItem.day}
                        </TabsTrigger>
                    ))}
                </TabsList>
                {trackItem.days.map((dayItem) => (
                    <TabsContent value={dayItem._key} key={dayItem._key} className="mx-3 mt-4">
                        <ol className="relative border-l border-slate-800">
                            {dayItem.daySchedule.map((ev) => (
                                <li key={ev._key} className="ml-4 mt-2">
                                    <div
                                        className="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-slate-800 bg-slate-700" />
                                    <time className="mb-1 text-sm text-slate-400">{ev.timing}</time>
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
        <Tabs id="schedule" className="scroll-mt-10 flex-col" defaultValue={timeline[0]?._key}>
            {timeline[0]?.track &&
                <TabsList
                    className="w-full gap-x-1 rounded-[calc(1rem)] bg-slate-900 border border-white/15">{outerTabs}</TabsList>}
            {content}
        </Tabs>
    );
}