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
        <TabsTrigger
            value={trackItem._key}
            key={trackItem._key}
            className="tab-trigger"
        >
            {trackItem.track}
        </TabsTrigger>
    ));

    const content = timeline.map((trackItem) => (
        <TabsContent value={trackItem._key} key={trackItem._key}>
            <Tabs defaultValue={trackItem.days[0]?._key} className="flex-col">
                <TabsList className="tab-list">
                    {trackItem.days.map((dayItem) => (
                        <TabsTrigger
                            value={dayItem._key}
                            key={dayItem._key}
                            className="tab-trigger"
                        >
                            {dayItem.day}
                        </TabsTrigger>
                    ))}
                </TabsList>
                {trackItem.days.map((dayItem) => (
                    <TabsContent
                        value={dayItem._key}
                        key={dayItem._key}
                        className="mx-3"
                    >
                        <ol className="relative border-l border-slate-700">
                            {dayItem.daySchedule.map((ev) => (
                                <li key={ev._key} className="ml-4 mt-4">
                                    <div className="absolute w-2 h-2 rounded-full mt-1.5 -left-1 bg-[#ff9900]" />
                                    <time className="text-sm text-slate-400">
                                        {ev.timing}
                                    </time>
                                    <p className="text-[1.3rem] font-semibold">
                                        {ev.title}
                                    </p>
                                    <p className="text-sm leading-normal mt-1 mb-2">
                                        {ev.desc}
                                    </p>
                                    <p className="text-slate-500 text-sm">
                                        {ev.author}
                                    </p>
                                </li>
                            ))}
                        </ol>
                    </TabsContent>
                ))}
            </Tabs>
        </TabsContent>
    ));

    return (
        <Tabs
            id="schedule"
            className="scroll-mt-10 flex-col"
            defaultValue={timeline[0]?._key}
        >
            {timeline[0]?.track && (
                <TabsList className="tab-list">{outerTabs}</TabsList>
            )}
            {content}
        </Tabs>
    );
}
