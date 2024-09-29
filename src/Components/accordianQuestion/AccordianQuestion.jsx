import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/shadecn/ui/accordion';

export const AccordianQuestion = ({ options }) => {
    return (
        <Accordion type="single" collapsible className='space-y-4'>
            {
                (options ?? []).map((question, index) => (
                    <AccordionItem key={index} value={question.label} className='border border-theme-header rounded-xl px-2 bg-theme-fourth'>
                        <AccordionTrigger className="text-black font-semibold">
                            {question.label}
                        </AccordionTrigger>
                        <AccordionContent>
                            {
                                (question.options ?? []).map((o, i) =>  <li key={i} className="mb-1">{o}</li>)
                            }
                        </AccordionContent>
                    </AccordionItem>
                ))
            }
        </Accordion>
    )
}
