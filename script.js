const { useState } = React;
import { v4 as uuidv4 } from 'https://cdn.skypack.dev/uuid@8.3.2';

// Fake DB
const january = [
{
  id: 1,
  day: 1,
  isHoliday: false,
  isWeekend: false,
  holidayName: "New Year's Day",
  date: 'January 1 2021',
  holidayInformation:
  "" },

{
  id: 2,
  day: 2,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'January 2 2021',
  holidayInformation: '' },

{
  id: 3,
  day: 3,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'January 3 2021',
  holidayInformation: '' },

{
  id: 4,
  day: 4,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'January 4 2021',
  holidayInformation: '' },

{
  id: 5,
  day: 5,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'January 5 2021',
  holidayInformation: '' },

{
  id: 6,
  day: 6,
  isHoliday: false,
  isWeekend: false,
  holidayName: 'Epiphany',
  date: 'January 6 2021',
  holidayInformation:
  '' },

{
  id: 7,
  day: 7,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'January 7 2021',
  holidayInformation: '' },

{
  id: 8,
  day: 8,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'January 8 2021',
  holidayInformation: '' },

{
  id: 9,
  day: 9,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'January 9 2021',
  holidayInformation: '' },

{
  id: 10,
  day: 10,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'January 10 2021',
  holidayInformation: '' },

{
  id: 11,
  day: 11,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'January 11 2021',
  holidayInformation: '' },

{
  id: 12,
  day: 12,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'January 12 2021',
  holidayInformation: '' },

{
  id: 13,
  day: 13,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'January 13 2021',
  holidayInformation: '' },

{
  id: 14,
  day: 14,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'January 14 2021',
  holidayInformation: '' },

{
  id: 15,
  day: 15,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'January 15 2021',
  holidayInformation: '' },

{
  id: 16,
  day: 16,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'January 16 2021',
  holidayInformation: '' },

{
  id: 17,
  day: 17,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'January 17 2021',
  holidayInformation: '' },

{
  id: 18,
  day: 18,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'January 18 2021',
  holidayInformation: '' },

{
  id: 19,
  day: 19,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'January 19 2021',
  holidayInformation: '' },

{
  id: 20,
  day: 20,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'January 20 2021',
  holidayInformation: '' },

{
  id: 21,
  day: 21,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'January 21 2021',
  holidayInformation: '' },

{
  id: 22,
  day: 22,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'January 22 2021',
  holidayInformation: '' },

{
  id: 23,
  day: 23,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'January 23 2021',
  holidayInformation: '' },

{
  id: 24,
  day: 24,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'January 24 2021',
  holidayInformation: '' },

{
  id: 25,
  day: 25,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'January 25 2021',
  holidayInformation: '' },

{
  id: 26,
  day: 26,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'January 26 2021',
  holidayInformation: '' },

{
  id: 27,
  day: 27,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'January 27 2021',
  holidayInformation: '' },

{
  id: 28,
  day: 28,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'January 28 2021',
  holidayInformation: '' },

{
  id: 29,
  day: 29,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'January 29 2021',
  holidayInformation: '' },

{
  id: 30,
  day: 30,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'January 30 2021',
  holidayInformation: '' },

{
  id: 31,
  day: 31,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'January 31 2021',
  holidayInformation: '' }];



const february = [
{
  id: 32,
  day: 1,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'February 1 2021',
  holidayInformation: '' },

{
  id: 33,
  day: 2,
  isHoliday: false,
  isWeekend: false,
  holidayName: 'Groundhog Day',
  date: 'February 2 2021',
  holidayInformation:
  '' },

{
  id: 34,
  day: 3,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'February 3 2021',
  holidayInformation: '' },

{
  id: 35,
  day: 4,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'February 4 2021',
  holidayInformation: '' },

{
  id: 36,
  day: 5,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'February 5 2021',
  holidayInformation: '' },

{
  id: 37,
  day: 6,
  isHoliday: true,
  isWeekend: true,
  holidayName: 'Diálogo Global do PNUD sobre Finanças Públicas e Impostos para a Igualdade de Género',
  date: 'February 6 2024',
  holidayInformation: 'O diálogo global da ONU focado em como políticas fiscais podem promover a igualdade de gênero, com participação de especialistas e ministros de vários países.'},

{
  id: 38,
  day: 7,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'February 7 2021',
  holidayInformation: '' },

{
  id: 39,
  day: 8,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'February 8 2021',
  holidayInformation: '' },

{
  id: 40,
  day: 9,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'February 9 2021',
  holidayInformation: '' },

{
  id: 41,
  day: 10,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'February 10 2021',
  holidayInformation: '' },

{
  id: 42,
  day: 11,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'February 11 2021',
  holidayInformation: '' },

{
  id: 43,
  day: 12,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'February 12 2021',
  holidayInformation: '' },

{
  id: 102,
  day: 13,
  isHoliday: true,
  isWeekend: false,
  holidayName: 'ERA da Igualdade de Género Inclusiva',
  date: 'February 13 2024',
  holidayInformation: 'Conferência em Bruxelas organizada pelo projeto GENDERACTIONplus sobre igualdade de gênero inclusiva no contexto da Área de Pesquisa Europeia, com foco em inclusão e diversidade.'},
{
  id: 45,
  day: 14,
  isHoliday: false,
  isWeekend: false,
  holidayName: "Valentine's Day",
  date: 'February 14 2021',
  holidayInformation:
  "" },

{
  id: 46,
  day: 15,
  isHoliday: false,
  isWeekend: false,
  holidayName: 'Family Day',
  date: 'February 15 2021',
  holidayInformation:
  '' },

{
  id: 47,
  day: 16,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'February 16 2021',
  holidayInformation: '' },

{
  id: 48,
  day: 17,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'February 17 2021',
  holidayInformation: '' },

{
  id: 49,
  day: 18,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'February 18 2021',
  holidayInformation: '' },

{
  id: 50,
  day: 19,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'February 19 2021',
  holidayInformation: '' },

{
  id: 51,
  day: 20,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'February 20 2021',
  holidayInformation: '' },

{
  id: 52,
  day: 21,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'February 21 2021',
  holidayInformation: '' },

{
  id: 53,
  day: 22,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'February 22 2021',
  holidayInformation: '' },

{
  id: 54,
  day: 23,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'February 23 2021',
  holidayInformation: '' },

{
  id: 55,
  day: 24,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'February 24 2021',
  holidayInformation: '' },

{
  id: 56,
  day: 25,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'February 25 2021',
  holidayInformation: '' },

{
  id: 57,
  day: 26,
  isHoliday: false,
  isWeekend: false,
  holidayName: 'Yukon Heritage Day',
  date: 'February 26 2021',
  holidayInformation:
  '' },

{
  id: 58,
  day: 27,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'February 27 2021',
  holidayInformation: '' },

{
  id: 59,
  day: 28,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'February 28 2021',
  holidayInformation: '' }];



const march = [
{
  id: 60,
  day: 1,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'March 1 2021',
  holidayInformation: '' },

{
  id: 61,
  day: 2,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'March 2 2021',
  holidayInformation: '' },

{
  id: 62,
  day: 3,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'March 3 2021',
  holidayInformation: '' },

{
  id: 63,
  day: 4,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'March 4 2021',
  holidayInformation: '' },

{
  id: 64,
  day: 5,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'March 5 2021',
  holidayInformation: '' },

{
  id: 65,
  day: 6,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'March 6 2021',
  holidayInformation: '' },

{
  id: 66,
  day: 7,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'March 7 2021',
  holidayInformation: '' },

  {
    id: 67,
    day: 8,
    isHoliday: true,
    isWeekend: false,
    holidayName: "Dia Internacional da Mulher",
    date: "March 8 2024",
    holidayInformation: "O Dia Internacional da Mulher é uma celebração global das conquistas sociais, econômicas, culturais e políticas das mulheres. A data também serve como um chamado à ação pela igualdade de gênero."},

{
  id: 68,
  day: 9,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'March 9 2021',
  holidayInformation: '' },

{
  id: 69,
  day: 10,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'March 10 2021',
  holidayInformation: '' },

{
  id: 70,
  day: 11,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'March 11 2021',
  holidayInformation: '' },

{
  id: 71,
  day: 12,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'March 12 2021',
  holidayInformation: '' },

{
  id: 72,
  day: 13,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'March 13 2021',
  holidayInformation: '' },

{
  id: 73,
  day: 14,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'March 14 2021',
  holidayInformation: '' },

{
  id: 74,
  day: 15,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'March 15 2021',
  holidayInformation: '' },

{
  id: 75,
  day: 16,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'March 16 2021',
  holidayInformation: '' },

{
  id: 76,
  day: 17,
  isHoliday: false,
  isWeekend: false,
  holidayName: "St. Patrick's Day",
  date: 'March 17 2021',
  holidayInformation:
  "" },

{
  id: 77,
  day: 18,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'March 18 2021',
  holidayInformation: '' },

{
  id: 78,
  day: 19,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'March 19 2021',
  holidayInformation: '' },

{
  id: 79,
  day: 20,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'March 20 2021',
  holidayInformation: '' },

{
  id: 80,
  day: 21,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'March 21 2021',
  holidayInformation: '' },

{
  id: 81,
  day: 22,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'March 22 2021',
  holidayInformation: '' },

{
  id: 82,
  day: 23,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'March 23 2021',
  holidayInformation: '' },

{
  id: 83,
  day: 24,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'March 24 2021',
  holidayInformation: '' },

{
  id: 84,
  day: 25,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'March 25 2021',
  holidayInformation: '' },

{
  id: 85,
  day: 26,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'March 26 2021',
  holidayInformation: '' },

{
  id: 86,
  day: 27,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'March 27 2021',
  holidayInformation: '' },

{
  id: 87,
  day: 28,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'March 28 2021',
  holidayInformation: '' },

{
  id: 88,
  day: 29,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'March 29 2021',
  holidayInformation: '' },

{
  id: 89,
  day: 30,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'March 30 2021',
  holidayInformation: '' },

{
  id: 90,
  day: 31,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'March 31 2021',
  holidayInformation: '' }];



const april = [
{
  id: 91,
  day: 1,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'April 1 2021',
  holidayInformation: '' },

{
  id: 92,
  day: 2,
  isHoliday: false,
  isWeekend: false,
  holidayName: 'Good Friday',
  date: 'April 2 2021',
  holidayInformation:
  '' },

{
  id: 93,
  day: 3,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'April 3 2021',
  holidayInformation: '' },

{
  id: 94,
  day: 4,
  isHoliday: false,
  isWeekend: false,
  holidayName: 'Easter Sunday',
  date: 'April 4 2021',
  holidayInformation:
  "" },

{
  id: 95,
  day: 5,
  isHoliday: false,
  isWeekend: false,
  holidayName: 'Easter Monday',
  date: 'April 5 2021',
  holidayInformation:
  "" },

{
  id: 96,
  day: 6,
  isHoliday: false,
  isWeekend: false,
  holidayName: 'National Tartan Day',
  date: 'April 6 2021',
  holidayInformation:
  '' },

{
  id: 97,
  day: 7,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'April 7 2021',
  holidayInformation: '' },

{
  id: 98,
  day: 8,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'April 8 2021',
  holidayInformation: '' },

{
  id: 99,
  day: 9,
  isHoliday: false,
  isWeekend: false,
  holidayName: 'Vimy Ridge Day',
  date: 'April 9 2021',
  holidayInformation:
  '' },

{
  id: 100,
  day: 10,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'April 10 2021',
  holidayInformation: '' },

{
  id: 101,
  day: 11,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'April 11 2021',
  holidayInformation: '' },

{
  id: 102,
  day: 12,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'April 12 2021',
  holidayInformation: '' },

{
  id: 103,
  day: 13,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'April 13 2021',
  holidayInformation: '' },

{
  id: 104,
  day: 14,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'April 14 2021',
  holidayInformation: '' },

{
  id: 105,
  day: 15,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'April 15 2021',
  holidayInformation: '' },

{
  id: 106,
  day: 16,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'April 16 2021',
  holidayInformation: '' },

{
  id: 107,
  day: 17,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'April 17 2021',
  holidayInformation: '' },

{
  id: 108,
  day: 18,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'April 18 2021',
  holidayInformation: '' },

{
  id: 109,
  day: 19,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'April 19 2021',
  holidayInformation: '' },

{
  id: 110,
  day: 20,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'April 20 2021',
  holidayInformation: '' },

{
  id: 111,
  day: 21,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'April 21 2021',
  holidayInformation: '' },

{
  id: 112,
  day: 22,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'April 22 2021',
  holidayInformation: '' },

{
  id: 113,
  day: 23,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'April 23 2021',
  holidayInformation: '' },

{
  id: 114,
  day: 24,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'April 24 2021',
  holidayInformation: '' },

{
  id: 115,
  day: 25,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'April 25 2021',
  holidayInformation: '' },

{
  id: 116,
  day: 26,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'April 26 2021',
  holidayInformation: '' },

{
  id: 117,
  day: 27,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'April 27 2021',
  holidayInformation: '' },

{
  id: 118,
  day: 28,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'April 28 2021',
  holidayInformation: '' },

{
  id: 119,
  day: 29,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'April 29 2021',
  holidayInformation: '' },

{
  id: 120,
  day: 30,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'April 30 2021',
  holidayInformation: '' }];



const may = [
{
  id: 121,
  day: 1,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'May 1 2021',
  holidayInformation: '' },

{
  id: 122,
  day: 2,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'May 2 2021',
  holidayInformation: '' },

{
  id: 123,
  day: 3,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'May 3 2021',
  holidayInformation: '' },

{
  id: 124,
  day: 4,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'May 4 2021',
  holidayInformation: '' },

{
  id: 125,
  day: 5,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'May 5 2021',
  holidayInformation: '' },

{
  id: 126,
  day: 6,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'May 6 2021',
  holidayInformation: '' },

{
  id: 127,
  day: 7,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'May 7 2021',
  holidayInformation: '' },

{
  id: 128,
  day: 8,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'May 8 2021',
  holidayInformation: '' },

{
  id: 129,
  day: 9,
  isHoliday: false,
  isWeekend: false,
  holidayName: "Mother's Day",
  date: 'May 9 2021',
  holidayInformation:
  '' },

{
  id: 130,
  day: 10,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'May 10 2021',
  holidayInformation: '' },

{
  id: 131,
  day: 11,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'May 11 2021',
  holidayInformation: '' },

{
  id: 132,
  day: 12,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'May 12 2021',
  holidayInformation: '' },

{
  id: 133,
  day: 13,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'May 13 2021',
  holidayInformation: '' },

{
  id: 134,
  day: 14,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'May 14 2021',
  holidayInformation: '' },

{
  id: 135,
  day: 15,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'May 15 2021',
  holidayInformation: '' },

{
  id: 136,
  day: 16,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'May 16 2021',
  holidayInformation: '' },

{
  id: 137,
  day: 17,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'May 17 2021',
  holidayInformation: '' },

{
  id: 138,
  day: 18,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'May 18 2021',
  holidayInformation: '' },

{
  id: 139,
  day: 19,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'May 19 2021',
  holidayInformation: '' },

{
  id: 140,
  day: 20,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'May 20 2021',
  holidayInformation: '' },

{
  id: 141,
  day: 21,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'May 21 2021',
  holidayInformation: '' },

{
  id: 142,
  day: 22,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'May 22 2021',
  holidayInformation: '' },

{
  id: 143,
  day: 23,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'May 23 2021',
  holidayInformation: '' },

{
  id: 144,
  day: 24,
  isHoliday: false,
  isWeekend: false,
  holidayName: 'Victoria Day',
  date: 'May 24 2021',
  holidayInformation:
  '' },

{
  id: 145,
  day: 25,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'May 25 2021',
  holidayInformation: '' },

{
  id: 146,
  day: 26,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'May 26 2021',
  holidayInformation: '' },

{
  id: 147,
  day: 27,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'May 27 2021',
  holidayInformation: '' },

{
  id: 148,
  day: 28,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'May 28 2021',
  holidayInformation: '' },

{
  id: 149,
  day: 29,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'May 29 2021',
  holidayInformation: '' },

{
  id: 150,
  day: 30,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'May 30 2021',
  holidayInformation: '' },

{
  id: 151,
  day: 31,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'May 31 2021',
  holidayInformation: '' }];



const june = [
{
  id: 152,
  day: 1,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'June 1 2021',
  holidayInformation: '' },

{
  id: 153,
  day: 2,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'June 2 2021',
  holidayInformation: '' },

{
  id: 154,
  day: 3,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'June 3 2021',
  holidayInformation: '' },

{
  id: 155,
  day: 4,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'June 4 2021',
  holidayInformation: '' },

{
  id: 156,
  day: 5,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'June 5 2021',
  holidayInformation: '' },

{
  id: 157,
  day: 6,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'June 6 2021',
  holidayInformation: '' },

{
  id: 158,
  day: 7,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'June 7 2021',
  holidayInformation: '' },

{
  id: 159,
  day: 8,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'June 8 2021',
  holidayInformation: '' },

{
  id: 160,
  day: 9,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'June 9 2021',
  holidayInformation: '' },

{
  id: 161,
  day: 10,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'June 10 2021',
  holidayInformation: '' },

{
  id: 162,
  day: 11,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'June 11 2021',
  holidayInformation: '' },

{
  id: 163,
  day: 12,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'June 12 2021',
  holidayInformation: '' },

{
  id: 164,
  day: 13,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'June 13 2021',
  holidayInformation: '' },

{
  id: 165,
  day: 14,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'June 14 2021',
  holidayInformation: '' },

{
  id: 166,
  day: 15,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'June 15 2021',
  holidayInformation: '' },

{
  id: 167,
  day: 16,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'June 16 2021',
  holidayInformation: '' },

{
  id: 168,
  day: 17,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'June 17 2021',
  holidayInformation: '' },

{
  id: 169,
  day: 18,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'June 18 2021',
  holidayInformation: '' },

{
  id: 170,
  day: 19,
  isHoliday: true,
  isWeekend: true,
  holidayName: "Dia Internacional pela Eliminação da Violência Sexual em Conflitos",
  date: "June 19 2024",
  holidayInformation: "Este dia reconhece a necessidade de aumentar a conscientização sobre a violência sexual em conflitos armados e promover a solidariedade com as vítimas."},

{
  id: 171,
  day: 20,
  isHoliday: false,
  isWeekend: false,
  holidayName: "Father's Day",
  date: 'June 20 2021',
  holidayInformation:'' },

{
  id: 172,
  day: 21,
  isHoliday: false,
  isWeekend: false,
  holidayName: 'National Indigenous Peoples Day',
  date: 'June 21 2021',
  holidayInformation:
  '' },

{
  id: 173,
  day: 22,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'June 22 2021',
  holidayInformation: '' },

{
  id: 174,
  day: 23,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'June 23 2021',
  holidayInformation: '' },

{
  id: 175,
  day: 24,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'June 24 2021',
  holidayInformation: '' },

{
  id: 176,
  day: 25,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'June 25 2021',
  holidayInformation: '' },

{
  id: 177,
  day: 26,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'June 26 2021',
  holidayInformation: '' },

{
  id: 178,
  day: 27,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'June 27 2021',
  holidayInformation: '' },

{
  id: 179,
  day: 28,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'June 28 2021',
  holidayInformation: '' },

{
  id: 180,
  day: 29,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'June 29 2021',
  holidayInformation: '' },

{
  id: 181,
  day: 30,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'June 30 2021',
  holidayInformation: '' }];



const july = [
{
  id: 182,
  day: 1,
  isHoliday: false,
  isWeekend: false,
  holidayName: 'Canada Day',
  date: 'July 1 2021',
  holidayInformation:
  '' },

{
  id: 183,
  day: 2,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'July 2 2021',
  holidayInformation: '' },

{
  id: 184,
  day: 3,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'July 3 2021',
  holidayInformation: '' },

{
  id: 185,
  day: 4,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'July 4 2021',
  holidayInformation: '' },

{
  id: 186,
  day: 5,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'July 5 2021',
  holidayInformation: '' },

{
  id: 187,
  day: 6,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'July 6 2021',
  holidayInformation: '' },

{
  id: 188,
  day: 7,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'July 7 2021',
  holidayInformation: '' },

{
  id: 189,
  day: 8,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'July 8 2021',
  holidayInformation: '' },

{
  id: 190,
  day: 9,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'July 9 2021',
  holidayInformation: '' },

{
  id: 191,
  day: 10,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'July 10 2021',
  holidayInformation: '' },

{
  id: 192,
  day: 11,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'July 11 2021',
  holidayInformation: '' },

{
  id: 193,
  day: 12,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'July 12 2021',
  holidayInformation: '' },

{
  id: 194,
  day: 13,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'July 13 2021',
  holidayInformation: '' },

{
  id: 195,
  day: 14,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'July 14 2021',
  holidayInformation: '' },

{
  id: 196,
  day: 15,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'July 15 2021',
  holidayInformation: '' },

{
  id: 197,
  day: 16,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'July 16 2021',
  holidayInformation: '' },

{
  id: 198,
  day: 17,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'July 17 2021',
  holidayInformation: '' },

{
  id: 199,
  day: 18,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'July 18 2021',
  holidayInformation: '' },

{
  id: 200,
  day: 19,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'July 19 2021',
  holidayInformation: '' },

{
  id: 201,
  day: 20,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'July 20 2021',
  holidayInformation: '' },

{
  id: 202,
  day: 21,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'July 21 2021',
  holidayInformation: '' },

{
  id: 203,
  day: 22,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'July 22 2021',
  holidayInformation: '' },

{
  id: 204,
  day: 23,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'July 23 2021',
  holidayInformation: '' },

{
  id: 205,
  day: 24,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'July 24 2021',
  holidayInformation: '' },

{
  id: 206,
  day: 25,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'July 25 2021',
  holidayInformation: '' },

{
  id: 207,
  day: 26,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'July 26 2021',
  holidayInformation: '' },

{
  id: 208,
  day: 27,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'July 27 2021',
  holidayInformation: '' },

{
  id: 209,
  day: 28,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'July 28 2021',
  holidayInformation: '' },

{
  id: 210,
  day: 29,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'July 29 2021',
  holidayInformation: '' },

{
  id: 211,
  day: 30,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'July 30 2021',
  holidayInformation: '' },

{
  id: 212,
  day: 31,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'July 31 2021',
  holidayInformation: '' }];


const august = [
{
  id: 213,
  day: 1,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'August 1 2021',
  holidayInformation: '' },

{
  id: 214,
  day: 2,
  isHoliday: false,
  isWeekend: false,
  holidayName: 'Civic/Provincial Day',
  date: 'August 2 2021',
  holidayInformation:
  '' },

{
  id: 215,
  day: 3,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'August 3 2021',
  holidayInformation: '' },

{
  id: 216,
  day: 4,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'August 4 2021',
  holidayInformation: '' },

{
  id: 217,
  day: 5,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'August 5 2021',
  holidayInformation: '' },

{
  id: 218,
  day: 6,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'August 6 2021',
  holidayInformation: '' },

{
  id: 219,
  day: 7,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'August 7 2021',
  holidayInformation: '' },

{
  id: 220,
  day: 8,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'August 8 2021',
  holidayInformation: '' },

{
  id: 221,
  day: 9,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'August 9 2021',
  holidayInformation: '' },

{
  id: 222,
  day: 10,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'August 10 2021',
  holidayInformation: '' },

{
  id: 223,
  day: 11,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'August 11 2021',
  holidayInformation: '' },

{
  id: 224,
  day: 12,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'August 12 2021',
  holidayInformation: '' },

{
  id: 225,
  day: 13,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'August 13 2021',
  holidayInformation: '' },

{
  id: 226,
  day: 14,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'August 14 2021',
  holidayInformation: '' },

{
  id: 227,
  day: 15,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'August 15 2021',
  holidayInformation: '' },

{
  id: 228,
  day: 16,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'August 16 2021',
  holidayInformation: '' },

{
  id: 229,
  day: 17,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'August 17 2021',
  holidayInformation: '' },

{
  id: 230,
  day: 18,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'August 18 2021',
  holidayInformation: '' },

{
  id: 231,
  day: 19,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'August 19 2021',
  holidayInformation: '' },

{
  id: 232,
  day: 20,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'August 20 2021',
  holidayInformation: '' },

{
  id: 233,
  day: 21,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'August 21 2021',
  holidayInformation: '' },

{
  id: 234,
  day: 22,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'August 22 2021',
  holidayInformation: '' },

{
  id: 235,
  day: 23,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'August 23 2021',
  holidayInformation: '' },

{
  id: 236,
  day: 24,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'August 24 2021',
  holidayInformation: '' },

{
  id: 237,
  day: 25,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'August 25 2021',
  holidayInformation: '' },

{
  id: 238,
  day: 26,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'August 26 2021',
  holidayInformation: '' },

{
  id: 239,
  day: 27,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'August 27 2021',
  holidayInformation: '' },

{
  id: 240,
  day: 28,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'August 28 2021',
  holidayInformation: '' },

{
  id: 241,
  day: 29,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'August 29 2021',
  holidayInformation: '' },

{
  id: 242,
  day: 30,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'August 30 2021',
  holidayInformation: '' },

{
  id: 243,
  day: 31,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'August 31 2021',
  holidayInformation: '' }];



const september = [
{
  id: 244,
  day: 1,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'September 1 2021',
  holidayInformation: '' },

{
  id: 245,
  day: 2,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'September 2 2021',
  holidayInformation: '' },

{
  id: 246,
  day: 3,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'September 3 2021',
  holidayInformation: '' },

{
  id: 247,
  day: 4,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'September 4 2021',
  holidayInformation: '' },

{
  id: 248,
  day: 5,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'September 5 2021',
  holidayInformation: '' },

{
  id: 249,
  day: 6,
  isHoliday: false,
  isWeekend: false,
  holidayName: 'Labour Day',
  date: 'September 6 2021',
  holidayInformation:
  '' },

{
  id: 250,
  day: 7,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'September 7 2021',
  holidayInformation: '' },

{
  id: 251,
  day: 8,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'September 8 2021',
  holidayInformation: '' },

{
  id: 252,
  day: 9,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'September 9 2021',
  holidayInformation: '' },

{
  id: 253,
  day: 10,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'September 10 2021',
  holidayInformation: '' },

{
  id: 254,
  day: 11,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'September 11 2021',
  holidayInformation: '' },

{
  id: 255,
  day: 12,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'September 12 2021',
  holidayInformation: '' },

{
  id: 256,
  day: 13,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'September 13 2021',
  holidayInformation: '' },

{
  id: 257,
  day: 14,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'September 14 2021',
  holidayInformation: '' },

{
  id: 258,
  day: 15,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'September 15 2021',
  holidayInformation: '' },

{
  id: 259,
  day: 16,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'September 16 2021',
  holidayInformation: '' },

{
  id: 260,
  day: 17,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'September 17 2021',
  holidayInformation: '' },

{
  id: 261,
  day: 18,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'September 18 2021',
  holidayInformation: '' },

{
  id: 262,
  day: 19,
  isHoliday: true,
  isWeekend: true,
  holidayName: 'Dia Latino-Americano e Caribenho de Combate à Violência contra a Mulher',
  date: 'September 19 2024',
  holidayInformation:
  'This day raises awareness about violence against women in Latin America and the Caribbean, focusing on prevention and support for victims.'
},

{
  id: 263,
  day: 20,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'September 20 2021',
  holidayInformation: '' },

{
  id: 264,
  day: 21,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'September 21 2021',
  holidayInformation: '' },

{
  id: 265,
  day: 22,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'September 22 2021',
  holidayInformation: '' },

{
  id: 266,
  day: 23,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'September 23 2021',
  holidayInformation: '' },

{
  id: 267,
  day: 24,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'September 24 2021',
  holidayInformation: '' },

{
  id: 268,
  day: 25,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'September 25 2021',
  holidayInformation: '' },

{
  id: 269,
  day: 26,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'September 26 2021',
  holidayInformation: '' },

{
  id: 270,
  day: 27,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'September 27 2021',
  holidayInformation: '' },

{
  id: 271,
  day: 28,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'September 28 2021',
  holidayInformation: '' },

{
  id: 272,
  day: 29,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'September 29 2021',
  holidayInformation: '' },

{
  id: 273,
  day: 30,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'September 30 2021',
  holidayInformation: '' }];



const october = [
{
  id: 274,
  day: 1,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'October 1 2021',
  holidayInformation: '' },

{
  id: 275,
  day: 2,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'October 2 2021',
  holidayInformation: '' },

{
  id: 276,
  day: 3,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'October 3 2021',
  holidayInformation: '' },

{
  id: 277,
  day: 4,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'October 4 2021',
  holidayInformation: '' },

{
  id: 278,
  day: 5,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'October 5 2021',
  holidayInformation: '' },

{
  id: 279,
  day: 6,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'October 6 2021',
  holidayInformation: '' },

{
  id: 280,
  day: 7,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'October 7 2021',
  holidayInformation: '' },

{
  id: 281,
  day: 8,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'October 8 2021',
  holidayInformation: '' },

{
  id: 282,
  day: 9,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'October 9 2021',
  holidayInformation: '' },

{
  id: 283,
  day: 10,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'October 10 2021',
  holidayInformation: '' },

{
  id: 284,
  day: 11,
  isHoliday: true,
  isWeekend: true,
  holidayName: "Dia Internacional da Menina",
  date: "October 11 2024",
  holidayInformation: "Este dia promove os direitos das meninas em todo o mundo e chama a atenção para os desafios que elas enfrentam, incluindo discriminação de gênero, educação e saúde."},

{
  id: 285,
  day: 12,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'October 12 2021',
  holidayInformation: '' },

{
  id: 286,
  day: 13,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'October 13 2021',
  holidayInformation: '' },

{
  id: 287,
  day: 14,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'October 14 2021',
  holidayInformation: '' },

{
  id: 288,
  day: 15,
  isHoliday: true,
  isWeekend: true,
  holidayName: "Dia Internacional das Mulheres Rurais",
  date: "October 15 2024",
  holidayInformation: "Este dia reconhece o papel crucial que as mulheres rurais desempenham na agricultura, segurança alimentar e desenvolvimento rural."},
{
  id: 289,
  day: 16,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'October 16 2021',
  holidayInformation: '' },

{
  id: 290,
  day: 17,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'October 17 2021',
  holidayInformation: '' },

{
  id: 291,
  day: 18,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'October 18 2021',
  holidayInformation: '' },

{
  id: 292,
  day: 19,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'October 19 2021',
  holidayInformation: '' },

{
  id: 293,
  day: 20,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'October 20 2021',
  holidayInformation: '' },

{
  id: 294,
  day: 21,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'October 21 2021',
  holidayInformation: '' },

{
  id: 295,
  day: 22,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'October 22 2021',
  holidayInformation: '' },

{
  id: 296,
  day: 23,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'October 23 2021',
  holidayInformation: '' },

{
  id: 297,
  day: 24,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'October 24 2021',
  holidayInformation: '' },

{
  id: 298,
  day: 25,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'October 25 2021',
  holidayInformation: '' },

{
  id: 299,
  day: 26,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'October 26 2021',
  holidayInformation: '' },

{
  id: 300,
  day: 27,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'October 27 2021',
  holidayInformation: '' },

{
  id: 301,
  day: 28,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'October 28 2021',
  holidayInformation: '' },

{
  id: 302,
  day: 29,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'October 29 2021',
  holidayInformation: '' },

{
  id: 303,
  day: 30,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'October 30 2021',
  holidayInformation: '' },

{
  id: 304,
  day: 31,
  isHoliday: false,
  isWeekend: false,
  holidayName: 'Halloween',
  date: 'October 31 2021',
  holidayInformation:
  '' }];



const november = [
{
  id: 305,
  day: 1,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'November 1 2021',
  holidayInformation: '' },

{
  id: 306,
  day: 2,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'November 2 2021',
  holidayInformation: '' },

{
  id: 307,
  day: 3,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'November 3 2021',
  holidayInformation: '' },

{
  id: 308,
  day: 4,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'November 4 2021',
  holidayInformation: '' },

{
  id: 309,
  day: 5,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'November 5 2021',
  holidayInformation: '' },

{
  id: 310,
  day: 6,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'November 6 2021',
  holidayInformation: '' },

{
  id: 311,
  day: 7,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'November 7 2021',
  holidayInformation: '' },

{
  id: 312,
  day: 8,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'November 8 2021',
  holidayInformation: '' },

{
  id: 313,
  day: 9,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'November 9 2021',
  holidayInformation: '' },

{
  id: 314,
  day: 10,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'November 10 2021',
  holidayInformation: '' },

{
  id: 315,
  day: 11,
  isHoliday: false,
  isWeekend: false,
  holidayName: 'Remembrance Day',
  date: 'November 11 2021',
  holidayInformation:'' },

{
  id: 316,
  day: 12,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'November 12 2021',
  holidayInformation: '' },

{
  id: 317,
  day: 13,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'November 13 2021',
  holidayInformation: '' },

{
  id: 318,
  day: 14,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'November 14 2021',
  holidayInformation: '' },

{
  id: 319,
  day: 15,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'November 15 2021',
  holidayInformation: '' },

{
  id: 320,
  day: 16,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'November 16 2021',
  holidayInformation: '' },

{
  id: 321,
  day: 17,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'November 17 2021',
  holidayInformation: '' },

{
  id: 322,
  day: 18,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'November 18 2021',
  holidayInformation: '' },

{
  id: 323,
  day: 19,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'November 19 2021',
  holidayInformation: '' },

{
  id: 324,
  day: 20,
  isHoliday: true,
  isWeekend: true,
  holidayName: "Dia Internacional da Memória Transgênero",
  date: "November 20 2024",
  holidayInformation: "Este dia homenageia as pessoas transgênero que perderam suas vidas como resultado da violência transfóbica e aumenta a conscientização sobre a violência enfrentada pela comunidade trans."},

{
  id: 325,
  day: 21,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'November 21 2021',
  holidayInformation: '' },

{
  id: 326,
  day: 22,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'November 22 2021',
  holidayInformation: '' },

{
  id: 327,
  day: 23,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'November 23 2021',
  holidayInformation: '' },

{
  id: 328,
  day: 24,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'November 24 2021',
  holidayInformation: '' },

{
  id: 329,
  day: 25,
  isHoliday: true,
  isWeekend: true,
  holidayName: "Dia Internacional para a Eliminação da Violência contra as Mulheres",
  date: "November 25 2024",
  holidayInformation: "Este dia marca o início dos 16 Dias de Ativismo Contra a Violência de Gênero e destaca a necessidade de erradicar a violência contra mulheres e meninas."},

{
  id: 330,
  day: 26,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'November 26 2021',
  holidayInformation: '' },

{
  id: 331,
  day: 27,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'November 27 2021',
  holidayInformation: '' },

{
  id: 332,
  day: 28,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'November 28 2021',
  holidayInformation: '' },

{
  id: 333,
  day: 29,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'November 29 2021',
  holidayInformation: '' },

{
  id: 334,
  day: 30,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'November 30 2021',
  holidayInformation: '' }];



const december = [
{
  id: 335,
  day: 1,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'December 1 2021',
  holidayInformation: '' },

{
  id: 336,
  day: 2,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'December 2 2021',
  holidayInformation: '' },

{
  id: 337,
  day: 3,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'December 3 2021',
  holidayInformation: '' },

{
  id: 338,
  day: 4,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'December 4 2021',
  holidayInformation: '' },

{
  id: 339,
  day: 5,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'December 5 2021',
  holidayInformation: '' },

{
  id: 340,
  day: 6,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'December 6 2021',
  holidayInformation: '' },

{
  id: 341,
  day: 7,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'December 7 2021',
  holidayInformation: '' },

{
  id: 342,
  day: 8,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'December 8 2021',
  holidayInformation: '' },

{
  id: 343,
  day: 9,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'December 9 2021',
  holidayInformation: '' },

{
  id: 344,
  day: 10,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'December 10 2021',
  holidayInformation: '' },

{
  id: 345,
  day: 11,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'December 11 2021',
  holidayInformation: '' },

{
  id: 346,
  day: 12,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'December 12 2021',
  holidayInformation: '' },

{
  id: 347,
  day: 13,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'December 13 2021',
  holidayInformation: '' },

{
  id: 348,
  day: 14,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'December 14 2021',
  holidayInformation: '' },

{
  id: 349,
  day: 15,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'December 15 2021',
  holidayInformation: '' },

{
  id: 350,
  day: 16,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'December 16 2021',
  holidayInformation: '' },

{
  id: 351,
  day: 17,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'December 17 2021',
  holidayInformation: '' },

{
  id: 352,
  day: 18,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'December 18 2021',
  holidayInformation: '' },

{
  id: 353,
  day: 19,
  isHoliday: false,
  isWeekend: true,
  holidayName: '',
  date: 'December 19 2021',
  holidayInformation: '' },

{
  id: 354,
  day: 20,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'December 20 2021',
  holidayInformation: '' },

{
  id: 355,
  day: 21,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'December 21 2021',
  holidayInformation: '' },

{
  id: 356,
  day: 22,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'December 22 2021',
  holidayInformation: '' },

{
  id: 357,
  day: 23,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'December 23 2021',
  holidayInformation: '' },

{
  id: 358,
  day: 24,
  isHoliday: false,
  isWeekend: false,
  holidayName: 'Christmas Eve',
  date: 'December 24 2021',
  holidayInformation:
  '' },

{
  id: 359,
  day: 25,
  isHoliday: false,
  isWeekend: false,
  holidayName: 'Christmas Day',
  date: 'December 25 2021',
  holidayInformation:
  '' },

{
  id: 360,
  day: 26,
  isHoliday: false,
  isWeekend: false,
  holidayName: 'Boxing Day',
  date: 'December 26 2021',
  holidayInformation:
  '' },

{
  id: 361,
  day: 27,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'December 27 2021',
  holidayInformation: '' },

{
  id: 362,
  day: 28,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'December 28 2021',
  holidayInformation: '' },

{
  id: 363,
  day: 29,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'December 29 2021',
  holidayInformation: '' },

{
  id: 364,
  day: 30,
  isHoliday: false,
  isWeekend: false,
  holidayName: '',
  date: 'December 30 2021',
  holidayInformation: '' },

{
  id: 365,
  day: 31,
  isHoliday: false,
  isWeekend: false,
  holidayName: "New Year's Eve",
  date: 'December 31 2021',
  holidayInformation:
  "" }];



// Legend component
const Legend = () => {
  return /*#__PURE__*/(
    React.createElement("div", { className: "legend" }, /*#__PURE__*/
    React.createElement("div", { className: "legend-holiday-parent" }, /*#__PURE__*/
    React.createElement("h5", { className: "legend-name holiday" }, "Feriados:"), /*#__PURE__*/
    React.createElement("div", { className: "legend-holiday" })), /*#__PURE__*/

    React.createElement("div", { className: "legend-weekend-parent" }, /*#__PURE__*/
    React.createElement("h5", { className: "legend-name weekends" }, "Fins de semana:"), /*#__PURE__*/
    React.createElement("div", { className: "legend-weekends" }))));



};

// Modal component
const Modal = ({ isOpen, date, handleClose, holidayName, information }) => {
  return /*#__PURE__*/(
    React.createElement("div", {
      style: isOpen ? { display: 'grid' } : { display: 'none' },
      className: "modal animate__animated animate__fadeIn animate__faster" }, /*#__PURE__*/

    React.createElement("div", { className: "modal-box" }, /*#__PURE__*/
    React.createElement("div", { className: "modal-header" }, /*#__PURE__*/
    React.createElement("h4", { className: "modal-header-title" }, date), /*#__PURE__*/
    React.createElement("button", { onClick: handleClose, className: "modal-header-close-btn" }, /*#__PURE__*/
    React.createElement("i", { className: "fas fa-times" }))), /*#__PURE__*/


    React.createElement("h4", { className: "modal-h4-holiday" }, /*#__PURE__*/
    React.createElement("span", { className: "modal-h4-holiday-title" }, /*#__PURE__*/
    React.createElement("i", { className: "fas fa-glass-cheers" }), " Feriado/Evento:"),
    ' ',
    holidayName), /*#__PURE__*/

    React.createElement("div", { className: "modal-holiday-information-container" }, /*#__PURE__*/
    React.createElement("h4", { className: "modal-h4-holiday-information-title" }, "Informações:"), /*#__PURE__*/
    React.createElement("h5", { className: "modal-information" }, information)))));




};

// Month component
const Month = ({
  monthTitle,
  daysOfTheWeek,
  className,
  month,
  newMoon,
  fullMoon }) =>
{
  return /*#__PURE__*/(
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("h5", { className: "month" }, monthTitle), /*#__PURE__*/
    React.createElement("div", { className: "calendar-week" }, daysOfTheWeek), /*#__PURE__*/
    React.createElement("div", { className: "calendar-days" }, /*#__PURE__*/
    React.createElement("div", { className: `${className}-empty` }),
    month), /*#__PURE__*/

    React.createElement(Moon, { newMoon: newMoon, fullMoon: fullMoon })));


};

const Moon = ({ newMoon, fullMoon }) => {
  return /*#__PURE__*/(
    React.createElement("div", { className: "moon" }, /*#__PURE__*/
    React.createElement("p", null, newMoon, ":"), /*#__PURE__*/
    React.createElement("i", { className: "far fa-circle", title: "New moon" }), /*#__PURE__*/
    React.createElement("p", null, fullMoon, ":"), /*#__PURE__*/
    React.createElement("i", { className: "fas fa-circle", title: "full moon" })));


};

// Calendar main component
const Calendar = () => {
  const weeks = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'];
  const isHolidayStyle = { backgroundColor: '#ef4462', color: '#eef2f6' };
  const isWeekendStyle = { backgroundColor: '#8aa6c1' };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [holidayName, setHolidayName] = useState('');
  const [date, setDate] = useState('');
  const [holidayInformation, setHolidayInformation] = useState('');

  const handleClose = () => {
    setIsModalOpen(false);
    setHolidayName('');
    setDate('');
    setHolidayInformation('');
  };

  const daysOfTheWeek = weeks.map(day => /*#__PURE__*/React.createElement("p", { key: uuidv4() }, day));

  const januaryCal = january.map((data) => /*#__PURE__*/
  React.createElement("div", {
    onClick: () => {
      setIsModalOpen(true);
      setHolidayName(data.isHoliday ? data.holidayName : 'No holiday today');
      setDate(data.date);
      setHolidayInformation(data.holidayInformation);
    },
    style:
    data.isHoliday ? isHolidayStyle : data.isWeekend ? isWeekendStyle : {},

    className: "days",
    key: data.id },

  data.day));



  const februaryCal = february.map((data) => /*#__PURE__*/
  React.createElement("div", {
    onClick: () => {
      setIsModalOpen(true);
      setHolidayName(data.isHoliday ? data.holidayName : 'No holiday today');
      setDate(data.date);
      setHolidayInformation(data.holidayInformation);
    },
    style:
    data.isHoliday ? isHolidayStyle : data.isWeekend ? isWeekendStyle : {},

    className: "days",
    key: data.id },

  data.day));



  const marchCal = march.map((data) => /*#__PURE__*/
  React.createElement("div", {
    onClick: () => {
      setIsModalOpen(true);
      setHolidayName(data.isHoliday ? data.holidayName : 'No holiday today');
      setDate(data.date);
      setHolidayInformation(data.holidayInformation);
    },
    style:
    data.isHoliday ? isHolidayStyle : data.isWeekend ? isWeekendStyle : {},

    className: "days",
    key: data.id },

  data.day));



  const aprilCal = april.map((data) => /*#__PURE__*/
  React.createElement("div", {
    onClick: () => {
      setIsModalOpen(true);
      setHolidayName(data.isHoliday ? data.holidayName : 'No holiday today');
      setDate(data.date);
      setHolidayInformation(data.holidayInformation);
    },
    style:
    data.isHoliday ? isHolidayStyle : data.isWeekend ? isWeekendStyle : {},

    className: "days",
    key: data.id },

  data.day));



  const mayCal = may.map((data) => /*#__PURE__*/
  React.createElement("div", {
    onClick: () => {
      setIsModalOpen(true);
      setHolidayName(data.isHoliday ? data.holidayName : 'No holiday today');
      setDate(data.date);
      setHolidayInformation(data.holidayInformation);
    },
    style:
    data.isHoliday ? isHolidayStyle : data.isWeekend ? isWeekendStyle : {},

    className: "days",
    key: data.id },

  data.day));



  const juneCal = june.map((data) => /*#__PURE__*/
  React.createElement("div", {
    onClick: () => {
      setIsModalOpen(true);
      setHolidayName(data.isHoliday ? data.holidayName : 'No holiday today');
      setDate(data.date);
      setHolidayInformation(data.holidayInformation);
    },
    style:
    data.isHoliday ? isHolidayStyle : data.isWeekend ? isWeekendStyle : {},

    className: "days",
    key: data.id },

  data.day));



  const julyCal = july.map((data) => /*#__PURE__*/
  React.createElement("div", {
    onClick: () => {
      setIsModalOpen(true);
      setHolidayName(data.isHoliday ? data.holidayName : 'No holiday today');
      setDate(data.date);
      setHolidayInformation(data.holidayInformation);
    },
    style:
    data.isHoliday ? isHolidayStyle : data.isWeekend ? isWeekendStyle : {},

    className: "days",
    key: data.id },

  data.day));



  const augustCal = august.map((data) => /*#__PURE__*/
  React.createElement("div", {
    onClick: () => {
      setIsModalOpen(true);
      setHolidayName(data.isHoliday ? data.holidayName : 'No holiday today');
      setDate(data.date);
      setHolidayInformation(data.holidayInformation);
    },
    style:
    data.isHoliday ? isHolidayStyle : data.isWeekend ? isWeekendStyle : {},

    className: "days",
    key: data.id },

  data.day));



  const septemberCal = september.map((data) => /*#__PURE__*/
  React.createElement("div", {
    onClick: () => {
      setIsModalOpen(true);
      setHolidayName(data.isHoliday ? data.holidayName : 'No holiday today');
      setDate(data.date);
      setHolidayInformation(data.holidayInformation);
    },
    style:
    data.isHoliday ? isHolidayStyle : data.isWeekend ? isWeekendStyle : {},

    className: "days",
    key: data.id },

  data.day));



  const octoberCal = october.map((data) => /*#__PURE__*/
  React.createElement("div", {
    onClick: () => {
      setIsModalOpen(true);
      setHolidayName(data.isHoliday ? data.holidayName : 'No holiday today');
      setDate(data.date);
      setHolidayInformation(data.holidayInformation);
    },
    style:
    data.isHoliday ? isHolidayStyle : data.isWeekend ? isWeekendStyle : {},

    className: "days",
    key: data.id },

  data.day));



  const novemberCal = november.map((data) => /*#__PURE__*/
  React.createElement("div", {
    onClick: () => {
      setIsModalOpen(true);
      setHolidayName(data.isHoliday ? data.holidayName : 'No holiday today');
      setDate(data.date);
      setHolidayInformation(data.holidayInformation);
    },
    style:
    data.isHoliday ? isHolidayStyle : data.isWeekend ? isWeekendStyle : {},

    className: "days",
    key: data.id },

  data.day));



  const decemberCal = december.map((data) => /*#__PURE__*/
  React.createElement("div", {
    onClick: () => {
      setIsModalOpen(true);
      setHolidayName(data.isHoliday ? data.holidayName : 'No holiday today');
      setDate(data.date);
      setHolidayInformation(data.holidayInformation);
    },
    style:
    data.isHoliday ? isHolidayStyle : data.isWeekend ? isWeekendStyle : {},

    className: "days",
    key: data.id },

  data.day));



  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("div", { className: "calendar" }, /*#__PURE__*/
    React.createElement("div", { className: "md-container" }, /*#__PURE__*/
    React.createElement("h1", { className: "calendar-title" }, "Calendário - Igualdade de Gênero",
    ' ', /*#__PURE__*/
    React.createElement("i", { className: "gender-icon fas fa-transgender" }), " ", /*#__PURE__*/React.createElement("br", null), ' ', "2024"), /*#__PURE__*/


    React.createElement(Legend, null), /*#__PURE__*/
    React.createElement("div", { className: "calendar-grid" }, /*#__PURE__*/
    React.createElement(Month, {
      monthTitle: "Janeiro",
      daysOfTheWeek: daysOfTheWeek,
      className: "january",
      month: januaryCal,
      newMoon: "13",
      fullMoon: "28" }), /*#__PURE__*/

    React.createElement(Month, {
      monthTitle: "Fevereiro",
      daysOfTheWeek: daysOfTheWeek,
      className: "february",
      month: februaryCal,
      newMoon: "11",
      fullMoon: "27" }), /*#__PURE__*/

    React.createElement(Month, {
      monthTitle: "Março",
      daysOfTheWeek: daysOfTheWeek,
      className: "march",
      month: marchCal,
      newMoon: "13",
      fullMoon: "28" }), /*#__PURE__*/

    React.createElement(Month, {
      monthTitle: "Abril",
      daysOfTheWeek: daysOfTheWeek,
      className: "april",
      month: aprilCal,
      newMoon: "11",
      fullMoon: "26" }), /*#__PURE__*/

    React.createElement(Month, {
      monthTitle: "Maio",
      daysOfTheWeek: daysOfTheWeek,
      className: "may",
      month: mayCal,
      newMoon: "11",
      fullMoon: "26" }), /*#__PURE__*/

    React.createElement(Month, {
      monthTitle: "Junho",
      daysOfTheWeek: daysOfTheWeek,
      className: "june",
      month: juneCal,
      newMoon: "10",
      fullMoon: "24" }), /*#__PURE__*/

    React.createElement(Month, {
      monthTitle: "Julho",
      daysOfTheWeek: daysOfTheWeek,
      className: "july",
      month: julyCal,
      newMoon: "9",
      fullMoon: "23" }), /*#__PURE__*/

    React.createElement(Month, {
      monthTitle: "Agosto",
      daysOfTheWeek: daysOfTheWeek,
      className: "august",
      month: augustCal,
      newMoon: "8",
      fullMoon: "22" }), /*#__PURE__*/

    React.createElement(Month, {
      monthTitle: "Setembro",
      daysOfTheWeek: daysOfTheWeek,
      className: "september",
      month: septemberCal,
      newMoon: "6",
      fullMoon: "20" }), /*#__PURE__*/

    React.createElement(Month, {
      monthTitle: "Outubro",
      daysOfTheWeek: daysOfTheWeek,
      className: "october",
      month: octoberCal,
      newMoon: "6",
      fullMoon: "20" }), /*#__PURE__*/

    React.createElement(Month, {
      monthTitle: "Novembro",
      daysOfTheWeek: daysOfTheWeek,
      className: "november",
      month: novemberCal,
      newMoon: "4",
      fullMoon: "19" }), /*#__PURE__*/

    React.createElement(Month, {
      monthTitle: "Dezembro",
      daysOfTheWeek: daysOfTheWeek,
      className: "december",
      month: decemberCal,
      newMoon: "4",
      fullMoon: "18" })))), /*#__PURE__*/




    React.createElement(Modal, {
      isOpen: isModalOpen,
      date: date,
      handleClose: handleClose,
      holidayName: holidayName,
      information: holidayInformation })));



};

// App
const App = () => /*#__PURE__*/React.createElement(Calendar, null);

// Render
ReactDOM.render( /*#__PURE__*/
React.createElement(React.StrictMode, null, /*#__PURE__*/
React.createElement(App, null)),

document.getElementById('root'));