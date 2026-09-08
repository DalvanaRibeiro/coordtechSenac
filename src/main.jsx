import React, { useEffect, useMemo, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import html2canvas from 'html2canvas'

import {
  Calculator,
  GraduationCap,
  FileCheck2,
  CalendarDays,
  Download,
  Plus,
  Trash2,
  RotateCcw,
  ChevronRight,
  BookOpenCheck,
  Clock3,
  Settings2,
  Layers3,
  ExternalLink
} from 'lucide-react'

import './styles.css'

// ==========================================================
// TÉCNICO EM DESENVOLVIMENTO DE SISTEMAS
// ==========================================================

const TDS_UCS = [
  {
    id: 'TDS-UC1',
    approvalKey: 'TDS-UC1',
    code: 'UC1',
    short: 'PDS',
    name: 'Planejar o desenvolvimento de software',
    hours: 36,
    module: 'I'
  },

  {
    id: 'TDS-UC2',
    approvalKey: 'TDS-UC2',
    code: 'UC2',
    short: 'DA',
    name: 'Desenvolver algoritmos',
    hours: 96,
    module: 'I'
  },

  {
    id: 'TDS-UC3',
    approvalKey: 'TDS-UC3',
    code: 'UC3',
    short: 'PABD',
    name: 'Planejar e administrar banco de dados',
    hours: 84,
    module: 'I'
  },

  {
    id: 'TDS-UC4',
    approvalKey: 'TDS-UC4',
    code: 'UC4',
    short: 'DCOO',
    name: 'Desenvolver código orientado a objeto',
    hours: 92,
    module: 'I'
  },

  {
    id: 'TDS-UC5',
    approvalKey: 'TDS-UC5',
    code: 'UC5',
    short: 'AOT',
    name: 'Aplicar orientação técnica',
    hours: 108,
    module: 'I'
  },

  {
    id: 'TDS-UC6',
    approvalKey: 'TDS-UC6',
    code: 'UC6',
    short: 'PI BD',
    name: 'Projeto Integrador – Banco de Dados',
    hours: 30,
    module: 'I'
  },

  {
    id: 'TDS-UC8',
    approvalKey: 'TDS-UC8',
    code: 'UC8',
    short: 'IGAD',
    name: 'Desenvolver e organizar interface gráfica para aplicações desktop',
    hours: 60,
    module: 'II'
  },

  {
    id: 'TDS-UC9',
    approvalKey: 'TDS-UC9',
    code: 'UC9',
    short: 'IBDD',
    name: 'Programar aplicativos computacionais com integração de banco de dados para desktop',
    hours: 96,
    module: 'II'
  },

  {
    id: 'TDS-UC10',
    approvalKey: 'TDS-UC10',
    code: 'UC10',
    short: 'GCVS',
    name: 'Gerenciar a configuração e o versionamento de software',
    hours: 36,
    module: 'II'
  },

  {
    id: 'TDS-UC11',
    approvalKey: 'TDS-UC11',
    code: 'UC11',
    short: 'MACD',
    name: 'Executar testes e realizar melhorias em aplicativos computacionais Desktop',
    hours: 36,
    module: 'II'
  },

  {
    id: 'TDS-UC17-I',
    approvalKey: 'TDS-UC17-I',
    code: 'UC17-I',
    short: 'PI FS',
    name: 'Projeto Integrador – Assistente de desenvolvimento de sistemas Full Stack – Parte I',
    hours: 25,
    module: 'II',
    segment: 'Parte I · Módulo II · 25h'
  },

  {
    id: 'TDS-UC12',
    approvalKey: 'TDS-UC12',
    code: 'UC12',
    short: 'FE',
    name: 'Desenvolver e organizar interface de usuário e elementos visuais para aplicações web (front-end)',
    hours: 96,
    module: 'III'
  },

  {
    id: 'TDS-UC13',
    approvalKey: 'TDS-UC13',
    code: 'UC13',
    short: 'BE',
    name: 'Programar aplicativos computacionais com integração de banco de dados para web (back-end)',
    hours: 96,
    module: 'III'
  },

  {
    id: 'TDS-UC14',
    approvalKey: 'TDS-UC14',
    code: 'UC14',
    short: 'PTAW',
    name: 'Publicar e testar aplicações Web',
    hours: 36,
    module: 'III'
  },

  {
    id: 'TDS-UC15',
    approvalKey: 'TDS-UC15',
    code: 'UC15',
    short: 'IGDM',
    name: 'Desenvolver e organizar interface gráfica para dispositivos móveis',
    hours: 96,
    module: 'III'
  },

  {
    id: 'TDS-UC16',
    approvalKey: 'TDS-UC16',
    code: 'UC16',
    short: 'IMEU',
    name: 'Desenvolver interfaces para melhor experiência do usuário',
    hours: 60,
    module: 'III'
  },

  {
    id: 'TDS-UC17-II',
    approvalKey: 'TDS-UC17-II',
    code: 'UC17-II',
    short: 'PI II FS',
    name: 'Projeto Integrador – Assistente de desenvolvimento de sistemas Full Stack – Parte II',
    hours: 25,
    module: 'III',
    segment: 'Parte II · Módulo III · 25h'
  },

  {
    id: 'TDS-UC7',
    approvalKey: 'TDS-UC7',
    code: 'UC7',
    short: 'EOT',
    name: 'Elaborar orientações técnicas',
    hours: 108,
    module: 'IV'
  }
]

// ==========================================================
// TÉCNICO EM INTELIGÊNCIA ARTIFICIAL
// MATRIZ ATUALIZADA
// TOTAL: 1.200 HORAS
// ==========================================================

const TIA_UCS = [
  // ======================================================
  // MÓDULO I
  // Assistente de Suporte Computacional
  // 364 horas
  // ======================================================

  {
    id: 'TIA-UC1',
    approvalKey: 'TIA-UC1',
    code: 'UC1',
    short: 'ARQ',
    name: 'Reconhecer modelos de Arquitetura de Computadores e GPU',
    hours: 64,
    module: 'I'
  },

  {
    id: 'TIA-UC2',
    approvalKey: 'TIA-UC2',
    code: 'UC2',
    short: 'PY',
    name: 'Desenvolver Algoritmos com Python',
    hours: 108,
    module: 'I'
  },

  {
    id: 'TIA-UC3',
    approvalKey: 'TIA-UC3',
    code: 'UC3',
    short: 'LOG',
    name: 'Aplicar funções de lógica matemática em Inteligência Artificial',
    hours: 40,
    module: 'I'
  },

  {
    id: 'TIA-UC4',
    approvalKey: 'TIA-UC4',
    code: 'UC4',
    short: 'EST',
    name: 'Utilizar estatística aplicada em aplicações de Inteligência Artificial',
    hours: 60,
    module: 'I',
    prerequisites: ['UC3']
  },

  {
    id: 'TIA-UC5',
    approvalKey: 'TIA-UC5',
    code: 'UC5',
    short: 'BD',
    name: 'Desenvolver Banco de Dados',
    hours: 72,
    module: 'I'
  },

  {
    id: 'TIA-UC6',
    approvalKey: 'TIA-UC6',
    code: 'UC6',
    short: 'PI SC',
    name: 'Projeto Integrador – Assistente de Suporte Computacional',
    hours: 20,
    module: 'I'
  },

  // ======================================================
  // MÓDULO II
  // Assistente de Análise de Dados
  // 396 horas
  // ======================================================

  {
    id: 'TIA-UC7',
    approvalKey: 'TIA-UC7',
    code: 'UC7',
    short: 'TD',
    name: 'Compreender a Transformação Digital para o modelo de negócio',
    hours: 40,
    module: 'II'
  },

  {
    id: 'TIA-UC8',
    approvalKey: 'TIA-UC8',
    code: 'UC8',
    short: 'CLOUD',
    name: 'Criar uma Arquitetura Cloud Computing e Big Data',
    hours: 92,
    module: 'II'
  },

  {
    id: 'TIA-UC9',
    approvalKey: 'TIA-UC9',
    code: 'UC9',
    short: 'ML',
    name: 'Compreender e Aplicar Machine Learning em soluções de IA',
    hours: 160,
    module: 'II',
    prerequisites: ['UC7', 'UC8']
  },

  {
    id: 'TIA-UC10',
    approvalKey: 'TIA-UC10',
    code: 'UC10',
    short: 'ÉTICA',
    name: 'Aplicar conceitos de Ética e Responsabilidade em IA na construção de soluções de Inteligência Artificial',
    hours: 36,
    module: 'II'
  },

  {
    id: 'TIA-UC11',
    approvalKey: 'TIA-UC11',
    code: 'UC11',
    short: 'EI',
    name: 'Analisar Estratégias de Informação para soluções de Inteligência Artificial',
    hours: 48,
    module: 'II'
  },

  {
    id: 'TIA-UC12',
    approvalKey: 'TIA-UC12',
    code: 'UC12',
    short: 'PI AD',
    name: 'Projeto Integrador – Assistente de Análise de Dados',
    hours: 20,
    module: 'II'
  },

  // ======================================================
  // MÓDULO III
  // Assistente de Desenvolvimento em Inteligência Artificial
  // 440 horas
  // ======================================================

  {
    id: 'TIA-UC13',
    approvalKey: 'TIA-UC13',
    code: 'UC13',
    short: 'RNA',
    name: 'Desenvolver Redes Neurais Artificiais',
    hours: 80,
    module: 'III'
  },

  {
    id: 'TIA-UC14',
    approvalKey: 'TIA-UC14',
    code: 'UC14',
    short: 'DL',
    name: 'Aplicar Deep Learning para criar soluções de Inteligência Artificial',
    hours: 100,
    module: 'III'
  },

  {
    id: 'TIA-UC15',
    approvalKey: 'TIA-UC15',
    code: 'UC15',
    short: 'PLN',
    name: 'Utilizar Processamento de Linguagem Natural nos casos de uso para Inteligência Artificial',
    hours: 120,
    module: 'III'
  },

  {
    id: 'TIA-UC16',
    approvalKey: 'TIA-UC16',
    code: 'UC16',
    short: 'VC',
    name: 'Aplicar Visão Computacional para soluções em Inteligência Artificial',
    hours: 100,
    module: 'III'
  },

  {
    id: 'TIA-UC17',
    approvalKey: 'TIA-UC17',
    code: 'UC17',
    short: 'PI IA',
    name: 'Projeto Integrador – Assistente de Desenvolvimento em Inteligência Artificial',
    hours: 40,
    module: 'III'
  }
]

// ==========================================================
// CURSOS
// ==========================================================

const COURSES = {
  TDS: {
    label: 'Técnico em Desenvolvimento de Sistemas',
    short: 'TDS',
    ucs: TDS_UCS,

    moduleTotals: {
      I: 446,
      II: 253,
      III: 409,
      IV: 108
    },

    total: 1216
  },

  TIA: {
    label: 'Técnico em Inteligência Artificial',
    short: 'TIA',
    ucs: TIA_UCS,

    moduleTotals: {
      I: 364,
      II: 396,
      III: 440
    },

    total: 1200
  }
}

// ==========================================================
// CARGA HORÁRIA POR TURNO
// ==========================================================

const SHIFT_HOURS = {
  Manhã: 3,
  Tarde: 4,
  Noite: 3
}

// ==========================================================
// CRONOGRAMAS
// ==========================================================

const CLASS_SCHEDULES = [
  {
    className: 'TDS261N (6091)',
    course: 'TDS',
    url: 'https://senacrs365-my.sharepoint.com/:x:/g/personal/vbvasconcellos_senacrs_com_br/IQARx-dobfIeSaQBaD39EXt0ASnbOAHtX01zHV2mgjbqnD8?e=kXal1u'
  },

  {
    className: 'TDS261MPSG',
    course: 'TDS',
    url: 'https://senacrs365-my.sharepoint.com/:x:/g/personal/dalribeiro_senacrs_com_br/IQCgnRFicskzRLKe-WjL21EpASgKQtTpEdNPLWX728U5mbA?e=k6et2I'
  },

  {
    className: 'TDS251N (5923)',
    course: 'TDS',
    url: 'https://senacrs365-my.sharepoint.com/:x:/g/personal/vbvasconcellos_senacrs_com_br/IQDyen7QuW6KRqBWA_vPWAveAcO8wTPFPLcmqv3FYq-M2yQ?e=186vEY'
  },

  {
    className: 'TDS252N (5956)',
    course: 'TDS',
    url: 'https://senacrs365-my.sharepoint.com/:x:/g/personal/vbvasconcellos_senacrs_com_br/IQCWZTlpUsd3Sby7U-VrBTUWAV2Ig1NuBrdRUE6bQ0Jc1qE?e=hw6nd1'
  },

  {
    className: 'TDS261T (6090)',
    course: 'TDS',
    url: 'https://senacrs365-my.sharepoint.com/:x:/g/personal/vbvasconcellos_senacrs_com_br/IQDpbxdX-utIQb7PINFtYv2KAfsurdDON9TU6V21xOiDcNo?e=VTVu8P'
  },

  {
    className: 'TIA261N (6191)',
    course: 'TIA',
    url: 'https://senacrs365-my.sharepoint.com/:x:/g/personal/lanogueira_senacrs_com_br/IQC4t1L7t2DWRppsCB8apy0_AckeZmqXU65hGGdLAV-cCho?e=xEe3tP'
  },

  {
    className: 'Docentes',
    course: 'TODOS',
    url: 'https://senacrs365-my.sharepoint.com/:x:/g/personal/lanogueira_senacrs_com_br/IQC4t1L7t2DWRppsCB8apy0_AckeZmqXU65hGGdLAV-cCho?e=xEe3tP'
  }
]

// ==========================================================
// LOCAL STORAGE
// ==========================================================

const store = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

const load = (key, defaultValue) => {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? defaultValue
  } catch {
    return defaultValue
  }
}

// ==========================================================
// ITENS PARA APROVEITAMENTO
// ==========================================================

function uniqueApprovalItems(ucs) {
  const map = new Map()

  ucs.forEach((u) => {
    const key = u.approvalKey || u.id

    if (!map.has(key)) {
      map.set(key, {
        ...u,
        id: key,
        hours: 0,
        modules: [],
        segments: []
      })
    }

    const item = map.get(key)

    item.hours += u.hours

    if (!item.modules.includes(u.module)) {
      item.modules.push(u.module)
    }

    item.segments.push(u)
  })

  return [...map.values()]
}

// ==========================================================
// COMPONENTE PRINCIPAL
// ==========================================================

function App() {
  const [tab, setTab] = useState('calculo')

  const [course, setCourse] = useState('TDS')

  const [ucId, setUcId] = useState('TDS-UC1')

  const [shift, setShift] = useState('Noite')

  const [calcHistory, setCalcHistory] = useState(() =>
    load('coordtech-history', [])
  )

  const [approvedByCourse, setApprovedByCourse] = useState(() =>
    load('coordtech-approved-by-course-v3', {
      TDS: [],
      TIA: []
    })
  )

  const [classByModule, setClassByModule] = useState(() =>
    load('coordtech-classes', {
      I: '',
      II: '',
      III: '',
      IV: ''
    })
  )

  const [startDates, setStartDates] = useState(() =>
    load('coordtech-starts', {})
  )

  const [startClasses, setStartClasses] = useState(() =>
    load('coordtech-start-classes', {})
  )

  const [student, setStudent] = useState(() =>
    load('coordtech-student', '')
  )

  const reportRef = useRef(null)

  // ======================================================
  // CURSO ATUAL
  // ======================================================

  const currentCourse = COURSES[course]

  const approved = approvedByCourse[course] || []

  const approvalItems = useMemo(
    () => uniqueApprovalItems(currentCourse.ucs),
    [currentCourse]
  )

  // ======================================================
  // ALTERAÇÃO DE CURSO
  // ======================================================

  useEffect(() => {
    setUcId(currentCourse.ucs[0].id)
  }, [course, currentCourse])

  // ======================================================
  // SALVAMENTO AUTOMÁTICO
  // ======================================================

  useEffect(() => {
    store('coordtech-history', calcHistory)
  }, [calcHistory])

  useEffect(() => {
    store('coordtech-approved-by-course-v3', approvedByCourse)
  }, [approvedByCourse])

  useEffect(() => {
    store('coordtech-classes', classByModule)
  }, [classByModule])

  useEffect(() => {
    store('coordtech-starts', startDates)
  }, [startDates])

  useEffect(() => {
    store('coordtech-start-classes', startClasses)
  }, [startClasses])

  useEffect(() => {
    store('coordtech-student', student)
  }, [student])

  // ======================================================
  // UC SELECIONADA
  // ======================================================

  const selectedUc =
    currentCourse.ucs.find((u) => u.id === ucId) ||
    currentCourse.ucs[0]

  const meetingHours = SHIFT_HOURS[shift]

  const meetings = Math.ceil(
    selectedUc.hours / meetingHours
  )

  const lastMeetingHours =
    selectedUc.hours % meetingHours || meetingHours

  // ======================================================
  // ADICIONAR CÁLCULO
  // ======================================================

  const addCalculation = () => {
    const entry = {
      id: Date.now(),
      course,
      uc: selectedUc,
      shift,
      meetingHours,
      meetings,
      lastMeetingHours
    }

    setCalcHistory((history) =>
      [entry, ...history].slice(0, 20)
    )
  }

  // ======================================================
  // MÓDULOS
  // ======================================================

  const modules = [
    ...new Set(
      currentCourse.ucs.map((u) => u.module)
    )
  ]

  // ======================================================
  // TOTAIS POR MÓDULO
  // ======================================================

  const totals = Object.fromEntries(
    modules.map((module) => [
      module,
      currentCourse.ucs
        .filter((u) => u.module === module)
        .reduce((total, uc) => total + uc.hours, 0)
    ])
  )

  // ======================================================
  // HORAS APROVEITADAS
  // ======================================================

  const approvedByModule = Object.fromEntries(
    modules.map((module) => [
      module,

      currentCourse.ucs
        .filter(
          (u) =>
            u.module === module &&
            approved.includes(
              u.approvalKey || u.id
            )
        )
        .reduce(
          (total, uc) =>
            total + uc.hours,
          0
        )
    ])
  )

  // ======================================================
  // HORAS RESTANTES
  // ======================================================

  const remainingByModule = Object.fromEntries(
    modules.map((module) => [
      module,

      Math.max(
        0,
        totals[module] -
          approvedByModule[module]
      )
    ])
  )

  const totalApproved =
    Object.values(
      approvedByModule
    ).reduce(
      (total, value) =>
        total + value,
      0
    )

  const totalRemaining =
    Object.values(
      remainingByModule
    ).reduce(
      (total, value) =>
        total + value,
      0
    )

  // ======================================================
  // UCs PENDENTES
  // ======================================================

  const missingSegments =
    currentCourse.ucs.filter(
      (u) =>
        !approved.includes(
          u.approvalKey || u.id
        )
    )

  // ======================================================
  // UCs APROVEITADAS
  // ======================================================

  const selectedApproved =
    approvalItems.filter(
      (u) =>
        approved.includes(u.id)
    )

  // ======================================================
  // MARCAR / DESMARCAR APROVEITAMENTO
  // ======================================================

  const toggleApproved = (id) => {
    setApprovedByCourse((previous) => {
      const selected =
        previous[course] || []

      return {
        ...previous,

        [course]:
          selected.includes(id)
            ? selected.filter(
                (item) =>
                  item !== id
              )
            : [...selected, id]
      }
    })
  }

  // ======================================================
  // FORMATAÇÃO DE DATA
  // ======================================================

  const formatDate = (date) => {
    if (!date) return ''

    return new Date(
      `${date}T12:00:00`
    ).toLocaleDateString(
      'pt-BR'
    )
  }

  // ======================================================
  // DOWNLOAD DO PARECER
  // ======================================================

  const downloadReport = async () => {
    if (!reportRef.current) return

    const canvas =
      await html2canvas(
        reportRef.current,
        {
          scale: 2,
          backgroundColor: '#ffffff',
          useCORS: true
        }
      )

    const link =
      document.createElement('a')

    link.href =
      canvas.toDataURL('image/png')

    link.download =
      `parecer-${course.toLowerCase()}-${Date.now()}.png`

    link.click()
  }

  // ======================================================
  // CRONOGRAMAS DO CURSO
  // ======================================================

  const schedules =
    CLASS_SCHEDULES.filter(
      (item) =>
        item.course === course ||
        item.course === 'TODOS'
    )

  // ======================================================
  // RENDER
  // ======================================================

  return (
    <div className="app-shell">

      {/* ================================================= */}
      {/* SIDEBAR */}
      {/* ================================================= */}

      <aside className="sidebar">

        <div className="brand">

          <div className="brandmark">
            CT
          </div>

          <div>
            <strong>
              CoordTech
            </strong>

            <small>
              Coordenação de Tecnologia
              <br />
              Prof. Msc. Dalvana Ribeiro
            </small>
          </div>

        </div>

        <nav>

          <button
            className={
              tab === 'calculo'
                ? 'active'
                : ''
            }
            onClick={() =>
              setTab('calculo')
            }
          >
            <Calculator />
            Carga horária
          </button>

          <button
            className={
              tab === 'aproveitamento'
                ? 'active'
                : ''
            }
            onClick={() =>
              setTab(
                'aproveitamento'
              )
            }
          >
            <FileCheck2 />
            Aproveitamento
          </button>

          <button
            className={
              tab === 'grade'
                ? 'active'
                : ''
            }
            onClick={() =>
              setTab('grade')
            }
          >
            <BookOpenCheck />
            Grade curricular
          </button>

          <button
            className={
              tab === 'cronogramas'
                ? 'active'
                : ''
            }
            onClick={() =>
              setTab('cronogramas')
            }
          >
            <CalendarDays />
            Cronogramas das turmas
          </button>

        </nav>

        <div className="sidebar-note">
          <Settings2 />

          <span>
            Dados salvos
            automaticamente no navegador.
          </span>
        </div>

      </aside>

      {/* ================================================= */}
      {/* CONTEÚDO PRINCIPAL */}
      {/* ================================================= */}

      <main>

        {/* ================================================= */}
        {/* CABEÇALHO */}
        {/* ================================================= */}

        <header className="topbar">

          <div>

            <span className="eyebrow">
              SISTEMA DE COORDENAÇÃO
            </span>

            <h1>
              {tab === 'calculo'
                ? 'Planejamento de encontros'
                : tab === 'aproveitamento'
                ? 'Aproveitamento de estudos'
                : tab === 'grade'
                ? 'Grade curricular'
                : 'Cronogramas das turmas'}
            </h1>

          </div>

          <div className="course-switch">

            {Object.keys(
              COURSES
            ).map((key) => (

              <button
                key={key}
                className={
                  course === key
                    ? 'on'
                    : ''
                }
                onClick={() =>
                  setCourse(key)
                }
              >
                {key}
              </button>

            ))}

          </div>

        </header>

        {/* ================================================= */}
        {/* CÁLCULO DE ENCONTROS */}
        {/* ================================================= */}

        {tab === 'calculo' && (

          <section>

            <div className="hero-grid">

              <div className="card form-card">

                <div className="card-title">

                  <GraduationCap />

                  <div>
                    <h2>
                      Calcular encontros
                    </h2>

                    <p>
                      Selecione a UC e o turno
                      para obter a quantidade
                      de encontros.
                    </p>
                  </div>

                </div>

                <label>
                  Unidade Curricular
                </label>

                <select
                  value={ucId}
                  onChange={(event) =>
                    setUcId(
                      event.target.value
                    )
                  }
                >

                  {currentCourse.ucs.map(
                    (u) => (

                      <option
                        key={u.id}
                        value={u.id}
                      >
                        {u.code}

                        {u.short
                          ? ` ${u.short}`
                          : ''}

                        {' · '}Módulo{' '}
                        {u.module}

                        {' · '}
                        {u.name}

                        {' · '}
                        {u.hours}h
                      </option>

                    )
                  )}

                </select>

                <label>
                  Turno
                </label>

                <div className="segmented">

                  {Object.keys(
                    SHIFT_HOURS
                  ).map((schedule) => (

                    <button
                      key={schedule}
                      className={
                        shift ===
                        schedule
                          ? 'on'
                          : ''
                      }
                      onClick={() =>
                        setShift(
                          schedule
                        )
                      }
                    >
                      {schedule}

                      <small>
                        {
                          SHIFT_HOURS[
                            schedule
                          ]
                        }
                        h/encontro
                      </small>
                    </button>

                  ))}

                </div>

                <button
                  className="primary"
                  onClick={
                    addCalculation
                  }
                >
                  <Plus />
                  Adicionar ao planejamento
                </button>

              </div>

              {/* RESULTADO */}

              <div className="result-card">

                <span className="result-label">
                  RESULTADO
                </span>

                <strong>
                  {meetings}
                </strong>

                <b>
                  encontros
                </b>

                <div className="result-meta">

                  <span>
                    <Clock3 />
                    {selectedUc.hours}h
                    de UC
                  </span>

                  <span>
                    <CalendarDays />
                    {meetingHours}h
                    por encontro
                  </span>

                </div>

                {lastMeetingHours !==
                  meetingHours && (

                  <p className="warning">
                    O último encontro terá{' '}
                    {lastMeetingHours}h
                    para fechar exatamente{' '}
                    {selectedUc.hours}h.
                  </p>

                )}

              </div>

            </div>

            {/* HISTÓRICO */}

            <div className="card history-card">

              <div className="card-head">

                <div>

                  <h2>
                    Planejamento salvo
                  </h2>

                  <p>
                    Cálculos adicionados
                    nesta estação.
                  </p>

                </div>

                <button
                  className="ghost"
                  onClick={() =>
                    setCalcHistory([])
                  }
                >
                  <RotateCcw />
                  Limpar
                </button>

              </div>

              {calcHistory.length ===
              0 ? (

                <div className="empty">
                  Nenhum cálculo
                  adicionado ainda.
                </div>

              ) : (

                <div className="history-list">

                  {calcHistory.map(
                    (item) => (

                      <div
                        className="history-row"
                        key={item.id}
                      >

                        <div className="code-pill">
                          {item.uc.code}
                        </div>

                        <div className="grow">

                          <strong>
                            {
                              item.uc
                                .name
                            }
                          </strong>

                          <small>
                            {item.course}
                            {' · '}
                            Módulo{' '}
                            {
                              item.uc
                                .module
                            }
                            {' · '}
                            {item.shift}
                            {' · '}
                            {
                              item.uc
                                .hours
                            }
                            h
                          </small>

                        </div>

                        <div className="meeting-badge">

                          {
                            item.meetings
                          }

                          <small>
                            encontros
                          </small>

                        </div>

                        <button
                          className="icon-btn"
                          onClick={() =>
                            setCalcHistory(
                              (
                                history
                              ) =>
                                history.filter(
                                  (
                                    value
                                  ) =>
                                    value.id !==
                                    item.id
                                )
                            )
                          }
                        >
                          <Trash2 />
                        </button>

                      </div>

                    )
                  )}

                </div>

              )}

            </div>

          </section>

        )}

        {/* ================================================= */}
        {/* APROVEITAMENTO */}
        {/* ================================================= */}

        {tab ===
          'aproveitamento' && (

          <section className="aproveitamento-grid">

            <div className="card editor-card">

              <div className="card-title">

                <FileCheck2 />

                <div>

                  <h2>
                    Montar aproveitamento
                  </h2>

                  <p>
                    Selecione as UCs
                    aprovadas pelo
                    estudante.
                  </p>

                </div>

              </div>

              <label>
                Nome do estudante
              </label>

              <input
                value={student}
                onChange={(event) =>
                  setStudent(
                    event.target.value
                  )
                }
                placeholder="Ex.: Maria da Silva"
              />

              {/* MATRIZ OFICIAL */}

              <div className="official-matrix">

                <div className="official-matrix-head">

                  <strong>
                    Matriz {course}
                  </strong>

                  <span>
                    Total:{' '}
                    {
                      currentCourse.total
                    }
                    h
                  </span>

                </div>

                <div className="official-matrix-modules">

                  {modules.map(
                    (module) => (

                      <span key={module}>
                        Módulo {module}:{' '}
                        {totals[module]}h
                      </span>

                    )
                  )}

                </div>

                {course ===
                  'TIA' && (

                  <small>
                    Módulo I: Assistente
                    de Suporte
                    Computacional ·
                    Módulo II:
                    Assistente de
                    Análise de Dados ·
                    Módulo III:
                    Assistente de
                    Desenvolvimento em
                    Inteligência
                    Artificial.
                  </small>

                )}

                {course ===
                  'TDS' && (

                  <small>
                    UC17-I: 25h no
                    Módulo II ·
                    UC17-II: 25h no
                    Módulo III.
                  </small>

                )}

              </div>

              <h3>
                UCs aprovadas pelo
                estudante
              </h3>

              <div className="uc-checklist">

                {approvalItems.map(
                  (u) => (

                    <label
                      className="check-row"
                      key={u.id}
                    >

                      <input
                        type="checkbox"
                        checked={approved.includes(
                          u.id
                        )}
                        onChange={() =>
                          toggleApproved(
                            u.id
                          )
                        }
                      />

                      <span className="check-code">
                        {u.code}
                      </span>

                      <span className="grow">

                        <strong>
                          {u.name}
                        </strong>

                        {u.prerequisites &&
                          u
                            .prerequisites
                            .length >
                            0 && (

                            <small>
                              Pré-requisito:{' '}
                              {u.prerequisites.join(
                                ', '
                              )}
                            </small>

                          )}

                        {u.segment && (

                          <small>
                            {u.segment}
                          </small>

                        )}

                      </span>

                      <b>
                        {u.hours}h
                      </b>

                    </label>

                  )
                )}

              </div>

              {/* TABELA DE APROVEITAMENTO */}

              <h3>
                Tabela de
                aproveitamento
              </h3>

              <p className="mini-note">
                As UCs selecionadas são
                inseridas automaticamente
                em solicitado e
                dispensado.
              </p>

              <div className="mapping-preview">

                <div className="mapping-head">

                  <strong>
                    Unidade/Componente
                    Curricular solicitado
                  </strong>

                  <strong>
                    Unidade/Componente
                    Curricular dispensado
                  </strong>

                </div>

                {selectedApproved.length ===
                0 ? (

                  <div className="mapping-empty">
                    Selecione uma ou mais
                    UCs acima.
                  </div>

                ) : (

                  selectedApproved.map(
                    (u) => (

                      <div
                        className="mapping-row"
                        key={u.id}
                      >

                        <span>
                          <b>
                            {u.code}:
                          </b>{' '}
                          {u.name}
                        </span>

                        <span>
                          <b>
                            {u.code}:
                          </b>{' '}
                          {u.name}
                        </span>

                      </div>

                    )
                  )

                )}

              </div>

              {/* TURMAS POR MÓDULO */}

              <h3>
                Turma por módulo
              </h3>

              <div className="module-fields">

                {modules.map(
                  (module) => (

                    <div key={module}>

                      <label>
                        Módulo {module}
                      </label>

                      <input
                        value={
                          classByModule[
                            module
                          ] || ''
                        }
                        onChange={(
                          event
                        ) =>
                          setClassByModule(
                            (
                              previous
                            ) => ({
                              ...previous,
                              [module]:
                                event
                                  .target
                                  .value
                            })
                          )
                        }
                        placeholder={
                          course ===
                          'TIA'
                            ? 'Ex.: TIA261N'
                            : 'Ex.: TDS262N'
                        }
                      />

                    </div>

                  )
                )}

              </div>

              {/* CARGA HORÁRIA */}

              <h3>
                Carga horária oficial
                por módulo
              </h3>

              <p className="mini-note">
                Valores calculados
                diretamente a partir da
                matriz oficial cadastrada.
              </p>

              <div className="module-fields">

                {modules.map(
                  (module) => (

                    <div key={module}>

                      <label>
                        Módulo {module}
                      </label>

                      <div className="fixed-total">
                        {totals[module]} h
                      </div>

                    </div>

                  )
                )}

              </div>

              {/* PREVISÃO DE INÍCIO */}

              <h3>
                Previsões de início
              </h3>

              <p className="mini-note">
                Informe a data prevista
                e a turma para cada
                componente pendente.
              </p>

              <div className="date-grid">

                {missingSegments.map(
                  (u) => (

                    <div
                      className="start-card"
                      key={u.id}
                    >

                      <label>
                        {u.code}

                        {u.short
                          ? ` ${u.short}`
                          : ''}

                        {' · '}
                        Módulo{' '}
                        {u.module}

                        {' · '}
                        {u.hours}h
                      </label>

                      {u.segment && (

                        <span className="segment-label">
                          {u.segment}
                        </span>

                      )}

                      <div className="start-fields">

                        <input
                          type="date"
                          value={
                            startDates[
                              u.id
                            ] || ''
                          }
                          onChange={(
                            event
                          ) =>
                            setStartDates(
                              (
                                previous
                              ) => ({
                                ...previous,
                                [u.id]:
                                  event
                                    .target
                                    .value
                              })
                            )
                          }
                        />

                        <input
                          value={
                            startClasses[
                              u.id
                            ] || ''
                          }
                          onChange={(
                            event
                          ) =>
                            setStartClasses(
                              (
                                previous
                              ) => ({
                                ...previous,
                                [u.id]:
                                  event
                                    .target
                                    .value
                              })
                            )
                          }
                          placeholder={
                            course ===
                            'TIA'
                              ? 'Turma, ex.: TIA261N'
                              : 'Turma, ex.: TDS262N'
                          }
                        />

                      </div>

                    </div>

                  )
                )}

              </div>

            </div>

            {/* ================================================= */}
            {/* PARECER */}
            {/* ================================================= */}

            <div className="report-panel">

              <div className="report-actions">

                <button
                  className="primary"
                  onClick={
                    downloadReport
                  }
                >
                  <Download />
                  Baixar parecer em PNG
                </button>

              </div>

              <div
                className="report-paper"
                ref={reportRef}
              >

                <div className="report-header">

                  <div className="report-logo">
                    CoordTech
                  </div>

                  <div>

                    <strong>
                      Demonstrativo de
                      Aproveitamento de
                      Conhecimentos e
                      Experiências
                      Anteriores
                    </strong>

                    <small>
                      {
                        currentCourse.label
                      }
                    </small>

                  </div>

                </div>

                {student && (

                  <p>
                    <strong>
                      Estudante:
                    </strong>{' '}
                    {student}
                  </p>

                )}

                <div className="report-mapping">

                  <div className="report-map-head">

                    <strong>
                      Unidade/Componente
                      Curricular
                      solicitado
                    </strong>

                    <strong>
                      Unidade/Componente
                      Curricular
                      dispensado
                    </strong>

                  </div>

                  {selectedApproved.length ===
                  0 ? (

                    <div className="report-map-empty">
                      Nenhuma unidade
                      curricular
                      selecionada para
                      aproveitamento.
                    </div>

                  ) : (

                    selectedApproved.map(
                      (u) => (

                        <div
                          className="report-map-row"
                          key={u.id}
                        >

                          <span>
                            <b>
                              {u.code}:
                            </b>{' '}
                            {u.name}
                          </span>

                          <span>
                            <b>
                              {u.code}:
                            </b>{' '}
                            {u.name}
                          </span>

                        </div>

                      )
                    )

                  )}

                </div>

                <p>
                  O estudante{' '}
                  <strong>
                    {approved.length
                      ? 'possui'
                      : 'não possui'}
                  </strong>{' '}
                  aproveitamento nas
                  UCs{' '}

                  {selectedApproved.length
                    ? selectedApproved
                        .map(
                          (u) =>
                            u.code
                        )
                        .join(', ')
                    : '—'}.

                  {' '}As demais
                  unidades curriculares
                  deverão ser cursadas
                  para cumprimento dos
                  requisitos necessários
                  à conclusão do curso.
                </p>

                {course === 'TDS' && (

                  <p className="report-highlight">

                    <strong>
                      Observação:
                    </strong>{' '}

                    a UC17 está dividida
                    em duas partes
                    independentes para
                    fins de
                    aproveitamento:
                    UC17-I (25h,
                    Módulo II) e
                    UC17-II (25h,
                    Módulo III).

                  </p>

                )}

                {course === 'TIA' && (

                  <p className="report-highlight">

                    <strong>
                      Estrutura da
                      matriz:
                    </strong>{' '}

                    Módulo I – Assistente
                    de Suporte
                    Computacional
                    (364h); Módulo II –
                    Assistente de Análise
                    de Dados (396h);
                    Módulo III –
                    Assistente de
                    Desenvolvimento em
                    Inteligência
                    Artificial (440h).

                  </p>

                )}

                {/* HORAS */}

                <div className="hours-table">

                  <div className="hours-head">

                    <strong>
                      Módulo
                    </strong>

                    <strong>
                      Total
                    </strong>

                    <strong>
                      Aproveitado
                    </strong>

                    <strong>
                      A cursar
                    </strong>

                  </div>

                  {modules.map(
                    (module) => (

                      <div
                        className="hours-row"
                        key={module}
                      >

                        <span>
                          Módulo{' '}
                          {module}
                        </span>

                        <span>
                          {
                            totals[
                              module
                            ]
                          }
                          h
                        </span>

                        <span>
                          {
                            approvedByModule[
                              module
                            ]
                          }
                          h
                        </span>

                        <b>
                          {
                            remainingByModule[
                              module
                            ]
                          }
                          h
                        </b>

                      </div>

                    )
                  )}

                  <div className="hours-total">

                    <strong>
                      Total
                    </strong>

                    <span>
                      {
                        currentCourse.total
                      }
                      h
                    </span>

                    <span>
                      {totalApproved}h
                    </span>

                    <strong>
                      {totalRemaining}h
                    </strong>

                  </div>

                </div>

                <div className="total-line">

                  Horas a cursar:{' '}

                  <strong>
                    {totalRemaining}{' '}
                    horas
                  </strong>

                </div>

                {/* PENDÊNCIAS */}

                {modules.map(
                  (module) => {

                    const pending =
                      missingSegments.filter(
                        (u) =>
                          u.module ===
                          module
                      )

                    if (
                      !pending.length
                    ) {
                      return null
                    }

                    return (

                      <div
                        className="module-report"
                        key={module}
                      >

                        <p>

                          <strong>
                            Apto para
                            matrícula no
                            Módulo{' '}
                            {module}
                          </strong>

                          {classByModule[
                            module
                          ] ? (
                            <>
                              {' '}com a
                              turma{' '}
                              <strong>
                                {
                                  classByModule[
                                    module
                                  ]
                                }
                              </strong>
                            </>
                          ) : null}

                        </p>

                        {pending.map(
                          (u) => (

                            <p key={u.id}>

                              Previsão de
                              início para{' '}
                              {u.code}:{' '}

                              <strong>
                                {formatDate(
                                  startDates[
                                    u.id
                                  ]
                                ) ||
                                  'a definir'}
                              </strong>

                              {startClasses[
                                u.id
                              ] ? (
                                <>
                                  {' '}·
                                  Turma:{' '}
                                  <strong>
                                    {
                                      startClasses[
                                        u.id
                                      ]
                                    }
                                  </strong>
                                </>
                              ) : null}

                            </p>

                          )
                        )}

                      </div>

                    )
                  }
                )}

                {/* ASSINATURA */}

                <div className="signature">

                  <div className="signature-line" />

                  <strong>
                    Msc. Dalvana Ribeiro
                  </strong>

                  <span>
                    Coordenadora dos
                    Cursos de Tecnologia
                  </span>

                </div>

                <div className="report-footer">

                  Parecer gerado pelo
                  sistema CoordTech ·{' '}

                  {new Date().toLocaleDateString(
                    'pt-BR'
                  )}

                </div>

              </div>

            </div>

          </section>

        )}

        {/* ================================================= */}
        {/* CRONOGRAMAS */}
        {/* ================================================= */}

        {tab === 'cronogramas' && (

          <section>

            <div className="card history-card">

              <div className="card-head">

                <div>

                  <h2>
                    Cronogramas das
                    turmas {course}
                  </h2>

                  <p>
                    Acesso rápido às
                    planilhas oficiais
                    de cronograma no
                    SharePoint.
                  </p>

                </div>

              </div>

              <div className="history-list">

                {schedules.map(
                  (item) => (

                    <div
                      className="history-row"
                      key={item.className}
                    >

                      <div className="code-pill">
                        {
                          item.className
                        }
                      </div>

                      <div className="grow">

                        <strong>
                          {item.course ===
                          'TODOS'
                            ? 'Cronograma geral'
                            : COURSES[
                                item.course
                              ].label}
                        </strong>

                        <small>
                          Clique para
                          abrir o
                          cronograma em
                          uma nova aba.
                        </small>

                      </div>

                      <a
                        className="primary schedule-link"
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink />
                        Abrir cronograma
                      </a>

                    </div>

                  )
                )}

              </div>

            </div>

          </section>

        )}

        {/* ================================================= */}
        {/* GRADE CURRICULAR */}
        {/* ================================================= */}

        {tab === 'grade' && (

          <section className="modules-wrap">

            {modules.map(
              (module) => (

                <div
                  className="module-block"
                  key={module}
                >

                  <div className="module-title">

                    <div>

                      <Layers3 />

                      <span>
                        Módulo {module}
                      </span>

                    </div>

                    <b>
                      {totals[module]}h
                    </b>

                  </div>

                  {/* QUALIFICAÇÃO TIA */}

                  {course === 'TIA' &&
                    module === 'I' && (

                    <div className="module-qualification">
                      Qualificação:
                      Assistente de
                      Suporte
                      Computacional
                    </div>

                  )}

                  {course === 'TIA' &&
                    module === 'II' && (

                    <div className="module-qualification">
                      Qualificação:
                      Assistente de
                      Análise de Dados
                    </div>

                  )}

                  {course === 'TIA' &&
                    module ===
                      'III' && (

                    <div className="module-qualification">
                      Qualificação:
                      Assistente de
                      Desenvolvimento em
                      Inteligência
                      Artificial
                    </div>

                  )}

                  <div className="grade-grid">

                    {currentCourse.ucs
                      .filter(
                        (u) =>
                          u.module ===
                          module
                      )
                      .map((u) => (

                        <div
                          className={`uc-card ${
                            u.id.startsWith(
                              'TDS-UC17-'
                            )
                              ? 'uc17-card'
                              : ''
                          }`}
                          key={u.id}
                        >

                          <div className="uc-top">

                            <span>

                              {u.code}

                              {u.short
                                ? ` · ${u.short}`
                                : ''}

                            </span>

                            <b>
                              {u.hours}h
                            </b>

                          </div>

                          <h3>
                            {u.name}
                          </h3>

                          {u.prerequisites &&
                            u
                              .prerequisites
                              .length >
                              0 && (

                              <div className="segment-chip">
                                Pré-requisito:{' '}
                                {u.prerequisites.join(
                                  ', '
                                )}
                              </div>

                            )}

                          {u.segment && (

                            <div className="segment-chip">
                              {u.segment}
                            </div>

                          )}

                          <div className="uc-footer">

                            Módulo{' '}
                            {u.module}

                            <ChevronRight />

                          </div>

                        </div>

                      ))}

                  </div>

                </div>

              )
            )}

            <div className="card">

              <div className="card-head">

                <div>

                  <h2>
                    Carga horária total
                  </h2>

                  <p>
                    {
                      currentCourse.label
                    }
                  </p>

                </div>

                <strong>
                  {
                    currentCourse.total
                  }
                  h
                </strong>

              </div>

            </div>

          </section>

        )}

      </main>

    </div>
  )
}

// ==========================================================
// INICIALIZAÇÃO
// ==========================================================

createRoot(
  document.getElementById('root')
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
