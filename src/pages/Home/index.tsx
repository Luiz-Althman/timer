import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

import { CiPlay1 } from 'react-icons/ci';

import {
    CountdownContainer,
    FormContainer,
    HomeContainer,
    MinutesAmountInput,
    Separator,
    StartCountdownButton,
    TaskInput,
} from './styles';
import { useState } from 'react';

const newCycleFormValidadeSchema = zod.object({
    task: zod.string().min(1, 'Informe a tarefa!'),
    minutesAmount: zod
        .number()
        .min(5, 'O ciclo precisa ser de, no mínimo, 5 minutos.')
        .max(60, 'O ciclo precisa ser de, no máximo, 60 minutos.'),
});

// interface NewCycleFormData {
//     task: string;
//     minutesAmount: number;
// }

type NewCycleFormData = zod.infer<typeof newCycleFormValidadeSchema>;

// sempre que eu precisar referenciar um código javascript para o typescript, ou seja, mandar uma função para o typescript, eu utilizo o typeof antes da função javascript.

//type NewCycleFormData = zod.infer<typeof newCycleFormValidadeSchema>; Faz com que eu não precise fazer uma tipagem nova, porque o zod consegue mandar pro typescript os campos e seus valores pelo schema. Ele inferiu isso do schema

interface Cycle {
    id: string;
    task: string;
    minutesAmount: number;
}

export function Home() {
    const [cycles, setCycles] = useState<Cycle[]>([]);
    const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
    const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

    const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
        resolver: zodResolver(newCycleFormValidadeSchema),
        defaultValues: {
            task: '',
            minutesAmount: 0,
        },
    });

    function onSubmit(data: NewCycleFormData) {
        console.log(data);
        const id = String(new Date().getTime()); // pega a data em milisegundos. Uma forma de gerar um id sem api.
        const newCycle: Cycle = {
            id,
            task: data.task,
            minutesAmount: data.minutesAmount,
        };

        setCycles((state) => [...state, newCycle]); // estou adicionando dentro do array os novos valores. Eu pego o valor do estado atual, copio ele, e adiciono dentro do estado no final. Tudo isso em forma de função!
        setActiveCycleId(id);

        reset();
    }

    const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);
    // A variável activeCycle vai percorrer os cycles e vai encontrar (.find) um cycle onde o id do cycle seja igual ao id do cycle ativo (activeCycleId)

    const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0; //transformando os minutos da aplicação em segundos.
    const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0; // o número de segundos atual
    const minutesAmount = Math.floor(currentSeconds / 60); //transfornmando os segundos em minutos e segundos.

    const secondsAmount = currentSeconds % 60; //quantos segundos eu tenho do resto dessa aplicação

    const minutes = String(minutesAmount).padStart(2, '0'); //padStart preenche uma string com um tamanho especifico caso ela n tenha esse tamanho por algum caractere. Isso precisa ser feito porque quando chegar em algum número que não possui dois caracteres, tipo 1, 2, 3, 4.. ele precisa acrescentar um 0 na frente. O primeiro parametro é quantos caracteres eu quero, o segundo é se caso não tenha 2 caracteres, acrescenta o '0'.
    const seconds = String(secondsAmount).padStart(2, '0');

    const task = watch('task');
    const isSubmitDisabled = !task;

    return (
        <HomeContainer>
            <form onSubmit={handleSubmit(onSubmit)} action="">
                <FormContainer>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <TaskInput
                        id="task"
                        placeholder="Dê um nome para o seu projeto"
                        list="task-suggestions"
                        // onChange={(e) => setTask(e.target.value)}
                        // value={task}
                        {...register('task')}
                    />
                    <datalist id="task-suggestions">
                        <option value="1" />
                    </datalist>
                    <label htmlFor="minutesAmount">durante</label>
                    <MinutesAmountInput
                        type="number"
                        id="minutesAmount"
                        placeholder="00"
                        step={5}
                        min={5}
                        max={60}
                        {...register('minutesAmount', { valueAsNumber: true })}
                        // valueAsNumber ajuda na hora do retorno do hook form, porque ele devolve o valor do input como string, mesmo sendo do type number. Esse valueAsNumber é um booleano e força ele a me retornar um number.
                    />
                    <span>minutos.</span>
                </FormContainer>
                <CountdownContainer>
                    <span>{minutes[0]}</span>
                    <span>{minutes[1]}</span>
                    <Separator>:</Separator>
                    <span>{seconds[0]}</span>
                    <span>{seconds[1]}</span>
                </CountdownContainer>
                <StartCountdownButton disabled={isSubmitDisabled} type="submit">
                    <CiPlay1 size={24} />
                    Começar
                </StartCountdownButton>
            </form>
        </HomeContainer>
    );
}
