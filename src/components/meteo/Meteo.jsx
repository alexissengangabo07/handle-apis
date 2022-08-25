import {useEffect, useState} from 'react'
import axios from 'axios';

const Meteo = () => {
    let [ville, setVille] = useState('goma');
    let [temperature, setTemperature] = useState(0);
    let [rechercherValue, setRechercherValue] = useState('');

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${ville}&appid=5eefedf0a420914bd61456175efcb4eb&units=metric`)
            .then(response =>setTemperature(temperature = response.data.list[0].main.temp, console.log(temperature = response.data.list) ))
            .catch(err => console.log(err));
    }, [ville]);

    const rechercherVille = () => {
        setVille(rechercherValue);
    }

    return (
        <>
            <div class="flex justify-center">
                <div class="block rounded-lg shadow-lg bg-white w-1/3 text-center">
                    <div class="py-3 px-6 border-b border-gray-300">
                        <p class="text-sky-600/75">Méteo App</p>
                    </div>
                    <div class="p-6">
                        <h5 class="text-gray-900 text-xl font-medium mb-2">Chercher la meteo d'une ville</h5>

                        <form autoComplete='off' onSubmit={e => { e.preventDefault(); rechercherVille() }}>
                            <div class="relative">
                                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                </div>
                                <input onChange={e => setRechercherValue(e.target.value)} style={{outline: 'none'}} type="search" id="search" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Rechercher..." required="" />
                                <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Rechercher</button>
                            </div>
                        </form>

                    </div>
                    <div class="py-3 px-6 border-t border-gray-300 text-gray-600">
                        {temperature} °C
                    </div>
                </div>
            </div>
        </>
    )
}

export default Meteo