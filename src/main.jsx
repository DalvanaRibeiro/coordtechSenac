import React, { useEffect, useMemo, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import html2canvas from 'html2canvas'
import {
  Calculator, GraduationCap, FileCheck2, CalendarDays, Download, Plus,
  Trash2, RotateCcw, ChevronRight, BookOpenCheck, Clock3, Settings2, Layers3, ExternalLink
} from 'lucide-react'
import './styles.css'

const TDS_UCS = [
  { id:'TDS-UC1', approvalKey:'TDS-UC1', code:'UC1', short:'PDS', name:'Planejar o desenvolvimento de software', hours:36, module:'I' },
  { id:'TDS-UC2', approvalKey:'TDS-UC2', code:'UC2', short:'DA', name:'Desenvolver algoritmos', hours:96, module:'I' },
  { id:'TDS-UC3', approvalKey:'TDS-UC3', code:'UC3', short:'PABD', name:'Planejar e administrar banco de dados', hours:84, module:'I' },
  { id:'TDS-UC4', approvalKey:'TDS-UC4', code:'UC4', short:'DCOO', name:'Desenvolver código orientado a objeto', hours:92, module:'I' },
  { id:'TDS-UC5', approvalKey:'TDS-UC5', code:'UC5', short:'AOT', name:'Aplicar orientação técnica', hours:108, module:'I' },
  { id:'TDS-UC6', approvalKey:'TDS-UC6', code:'UC6', short:'PI BD', name:'Projeto Integrador – Banco de Dados', hours:30, module:'I' },

  { id:'TDS-UC8', approvalKey:'TDS-UC8', code:'UC8', short:'IGAD', name:'Desenvolver e organizar interface gráfica para aplicações desktop', hours:60, module:'II' },
  { id:'TDS-UC9', approvalKey:'TDS-UC9', code:'UC9', short:'IBDD', name:'Programar aplicativos computacionais com integração de banco de dados para desktop', hours:96, module:'II' },
  { id:'TDS-UC10', approvalKey:'TDS-UC10', code:'UC10', short:'GCVS', name:'Gerenciar a configuração e o versionamento de software', hours:36, module:'II' },
  { id:'TDS-UC11', approvalKey:'TDS-UC11', code:'UC11', short:'MACD', name:'Executar testes e realizar melhorias em aplicativos computacionais Desktop', hours:36, module:'II' },
  { id:'TDS-UC17-I', approvalKey:'TDS-UC17-I', code:'UC17-I', short:'PI FS', name:'Projeto Integrador – Assistente de desenvolvimento de sistemas Full Stack – Parte I', hours:25, module:'II', segment:'Parte I · Módulo II · 25h' },

  { id:'TDS-UC12', approvalKey:'TDS-UC12', code:'UC12', short:'FE', name:'Desenvolver e organizar interface de usuário e elementos visuais para aplicações web (front-end)', hours:96, module:'III' },
  { id:'TDS-UC13', approvalKey:'TDS-UC13', code:'UC13', short:'BE', name:'Programar aplicativos computacionais com integração de banco de dados para web (back-end)', hours:96, module:'III' },
  { id:'TDS-UC14', approvalKey:'TDS-UC14', code:'UC14', short:'PTAW', name:'Publicar e testar aplicações Web', hours:36, module:'III' },
  { id:'TDS-UC15', approvalKey:'TDS-UC15', code:'UC15', short:'IGDM', name:'Desenvolver e organizar interface gráfica para dispositivos móveis', hours:96, module:'III' },
  { id:'TDS-UC16', approvalKey:'TDS-UC16', code:'UC16', short:'IMEU', name:'Desenvolver interfaces para melhor experiência do usuário', hours:60, module:'III' },
  { id:'TDS-UC17-II', approvalKey:'TDS-UC17-II', code:'UC17-II', short:'PI II FS', name:'Projeto Integrador – Assistente de desenvolvimento de sistemas Full Stack – Parte II', hours:25, module:'III', segment:'Parte II · Módulo III · 25h' },

  { id:'TDS-UC7', approvalKey:'TDS-UC7', code:'UC7', short:'EOT', name:'Elaborar orientações técnicas', hours:108, module:'IV' }
]

const TIA_UCS = [
  { id:'TIA-UC1', approvalKey:'TIA-UC1', code:'UC1', name:'Fundamentos e arquitetura para Inteligência Artificial', hours:64, module:'I' },
  { id:'TIA-UC2', approvalKey:'TIA-UC2', code:'UC2', name:'Programação aplicada à Inteligência Artificial', hours:64, module:'I' },
  { id:'TIA-UC3', approvalKey:'TIA-UC3', code:'UC3', name:'Estatística e análise de dados para Inteligência Artificial', hours:64, module:'I' },
  { id:'TIA-UC4', approvalKey:'TIA-UC4', code:'UC4', name:'Banco de dados aplicado à Inteligência Artificial', hours:64, module:'I' },
  { id:'TIA-UC5', approvalKey:'TIA-UC5', code:'UC5', name:'Fundamentos de Machine Learning', hours:64, module:'I' },
  { id:'TIA-UC6', approvalKey:'TIA-UC6', code:'UC6', name:'Preparação e tratamento de dados para Inteligência Artificial', hours:64, module:'I' },
  { id:'TIA-UC7', approvalKey:'TIA-UC7', code:'UC7', name:'Compreender a Transformação Digital para o mundo do negócio', hours:40, module:'II' },
  { id:'TIA-UC8', approvalKey:'TIA-UC8', code:'UC8', name:'Criar uma Arquitetura Cloud Computing e Big Data', hours:92, module:'II' },
  { id:'TIA-UC9', approvalKey:'TIA-UC9', code:'UC9', name:'Compreender e Aplicar Machine Learning em soluções de I.A.', hours:160, module:'II' },
  { id:'TIA-UC10', approvalKey:'TIA-UC10', code:'UC10', name:'Aplicar conceitos de Ética e Responsabilidade em IA na construção de soluções de Inteligência Artificial', hours:36, module:'II' },
  { id:'TIA-UC11', approvalKey:'TIA-UC11', code:'UC11', name:'Analisar Estratégias de Informação para soluções de Inteligência Artificial', hours:48, module:'II' },
  { id:'TIA-UC12', approvalKey:'TIA-UC12', code:'UC12', name:'Projeto Integrador em Inteligência Artificial', hours:40, module:'III' },
  { id:'TIA-UC13', approvalKey:'TIA-UC13', code:'UC13', name:'Desenvolver Redes Neurais Artificiais', hours:80, module:'III' },
  { id:'TIA-UC14', approvalKey:'TIA-UC14', code:'UC14', name:'Aplicar Deep Learning para criar soluções de Inteligência Artificial', hours:100, module:'III' },
  { id:'TIA-UC15', approvalKey:'TIA-UC15', code:'UC15', name:'Utilizar Processamento de Linguagem Natural nos casos de uso para Inteligência Artificial', hours:120, module:'III' },
  { id:'TIA-UC16', approvalKey:'TIA-UC16', code:'UC16', name:'Aplicar Visão Computacional para soluções em Inteligência Artificial', hours:100, module:'III' }
]

const COURSES = {
  TDS: { label:'Técnico em Desenvolvimento de Sistemas', short:'TDS', ucs:TDS_UCS, moduleTotals:{I:446, II:253, III:409, IV:108}, total:1216 },
  TIA: { label:'Técnico em Inteligência Artificial', short:'TIA', ucs:TIA_UCS, moduleTotals:{I:384, II:376, III:440}, total:1200 }
}
const SHIFT_HOURS = { 'Manhã':3, 'Tarde':4, 'Noite':3 }

const CLASS_SCHEDULES = [
  { className:'TDS261N', url:'https://senacrs365-my.sharepoint.com/:x:/g/personal/vbvasconcellos_senacrs_com_br/IQARx-dobfIeSaQBaD39EXt0ASnbOAHtX01zHV2mgjbqnD8?e=kXal1u' },
  { className:'TDS261MPSG', url:'https://senacrs365-my.sharepoint.com/:x:/g/personal/dalribeiro_senacrs_com_br/IQCgnRFicskzRLKe-WjL21EpASgKQtTpEdNPLWX728U5mbA?e=k6et2I' },
  { className:'TDS251N', url:'https://senacrs365-my.sharepoint.com/:x:/g/personal/vbvasconcellos_senacrs_com_br/IQDyen7QuW6KRqBWA_vPWAveAcO8wTPFPLcmqv3FYq-M2yQ?e=186vEY' },
  { className:'TDS252N', url:'https://senacrs365-my.sharepoint.com/:x:/g/personal/vbvasconcellos_senacrs_com_br/IQCWZTlpUsd3Sby7U-VrBTUWAV2Ig1NuBrdRUE6bQ0Jc1qE?e=hw6nd1' },
  { className:'TDS261T', url:'https://senacrs365-my.sharepoint.com/:x:/g/personal/vbvasconcellos_senacrs_com_br/IQDpbxdX-utIQb7PINFtYv2KAfsurdDON9TU6V21xOiDcNo?e=VTVu8P' }
]

const store = (k,v)=>localStorage.setItem(k,JSON.stringify(v))
const load = (k,d)=>{ try { return JSON.parse(localStorage.getItem(k)) ?? d } catch { return d } }

function uniqueApprovalItems(ucs){
  const map = new Map()
  ucs.forEach(u=>{
    const key=u.approvalKey || u.id
    if(!map.has(key)) map.set(key,{...u,id:key,hours:0,modules:[],segments:[]})
    const item=map.get(key)
    item.hours += u.hours
    if(!item.modules.includes(u.module)) item.modules.push(u.module)
    item.segments.push(u)
  })
  return [...map.values()]
}

function App(){
  const [tab,setTab]=useState('calculo')
  const [course,setCourse]=useState('TDS')
  const [ucId,setUcId]=useState('TDS-UC1')
  const [shift,setShift]=useState('Noite')
  const [calcHistory,setCalcHistory]=useState(()=>load('coordtech-history',[]))
  const [approvedByCourse,setApprovedByCourse]=useState(()=>load('coordtech-approved-by-course-v3',{TDS:[],TIA:[]}))
  const [classByModule,setClassByModule]=useState(()=>load('coordtech-classes',{I:'',II:'',III:'',IV:''}))
  const [startDates,setStartDates]=useState(()=>load('coordtech-starts',{}))
  const [startClasses,setStartClasses]=useState(()=>load('coordtech-start-classes',{}))
  const [student,setStudent]=useState(()=>load('coordtech-student',''))
  const reportRef=useRef(null)

  const currentCourse=COURSES[course]
  const approved=approvedByCourse[course] || []
  const approvalItems=useMemo(()=>uniqueApprovalItems(currentCourse.ucs),[currentCourse])
  useEffect(()=>{ setUcId(currentCourse.ucs[0].id) },[course,currentCourse])
  useEffect(()=>store('coordtech-history',calcHistory),[calcHistory])
  useEffect(()=>store('coordtech-approved-by-course-v3',approvedByCourse),[approvedByCourse])
  useEffect(()=>store('coordtech-classes',classByModule),[classByModule])
  useEffect(()=>store('coordtech-starts',startDates),[startDates])
  useEffect(()=>store('coordtech-start-classes',startClasses),[startClasses])
  useEffect(()=>store('coordtech-student',student),[student])

  const selectedUc=currentCourse.ucs.find(u=>u.id===ucId) || currentCourse.ucs[0]
  const meetingHours=SHIFT_HOURS[shift]
  const meetings=Math.ceil(selectedUc.hours/meetingHours)
  const lastMeetingHours=selectedUc.hours % meetingHours || meetingHours

  const addCalculation=()=>{
    const entry={id:Date.now(),course,uc:selectedUc,shift,meetingHours,meetings,lastMeetingHours}
    setCalcHistory(h=>[entry,...h].slice(0,20))
  }

  const modules=[...new Set(currentCourse.ucs.map(u=>u.module))]
  // Totais fixos derivados da matriz oficial. Não usa valores antigos do localStorage.
  const totals=Object.fromEntries(modules.map(m=>[m, currentCourse.ucs.filter(u=>u.module===m).reduce((a,b)=>a+b.hours,0)]))
  const approvedByModule=Object.fromEntries(modules.map(m=>[m,currentCourse.ucs.filter(u=>u.module===m && approved.includes(u.approvalKey || u.id)).reduce((a,b)=>a+b.hours,0)]))
  const remainingByModule=Object.fromEntries(modules.map(m=>[m,Math.max(0,totals[m]-approvedByModule[m])]))
  const totalApproved=Object.values(approvedByModule).reduce((a,b)=>a+b,0)
  const totalRemaining=Object.values(remainingByModule).reduce((a,b)=>a+b,0)
  const missingSegments=currentCourse.ucs.filter(u=>!approved.includes(u.approvalKey || u.id))
  const selectedApproved=approvalItems.filter(u=>approved.includes(u.id))

  const toggleApproved=id=>setApprovedByCourse(prev=>{ const a=prev[course]||[]; return {...prev,[course]:a.includes(id)?a.filter(x=>x!==id):[...a,id]} })
  const formatDate=d=>d?new Date(`${d}T12:00:00`).toLocaleDateString('pt-BR'):''

  const downloadReport=async()=>{
    if(!reportRef.current) return
    const canvas=await html2canvas(reportRef.current,{scale:2,backgroundColor:'#ffffff',useCORS:true})
    const a=document.createElement('a'); a.href=canvas.toDataURL('image/png'); a.download=`parecer-${course.toLowerCase()}-${Date.now()}.png`; a.click()
  }

  return <div className="app-shell">
    <aside className="sidebar">
      <div className="brand"><div className="brandmark">CT</div><div><strong>CoordTech</strong><small>Coordenação de Tecnologia  Prof. Msc. Dalvana Ribeiro</small></div></div>
      <nav>
        <button className={tab==='calculo'?'active':''} onClick={()=>setTab('calculo')}><Calculator/>Carga horária</button>
        <button className={tab==='aproveitamento'?'active':''} onClick={()=>setTab('aproveitamento')}><FileCheck2/>Aproveitamento</button>
        <button className={tab==='grade'?'active':''} onClick={()=>setTab('grade')}><BookOpenCheck/>Grade curricular</button>
        <button className={tab==='cronogramas'?'active':''} onClick={()=>setTab('cronogramas')}><CalendarDays/>Cronogramas das turmas</button>
      </nav>
      <div className="sidebar-note"><Settings2/><span>Dados salvos automaticamente no navegador.</span></div>
    </aside>

    <main>
      <header className="topbar"><div><span className="eyebrow">SISTEMA DE COORDENAÇÃO</span><h1>{tab==='calculo'?'Planejamento de encontros':tab==='aproveitamento'?'Aproveitamento de estudos':tab==='grade'?'Grade curricular':'Cronogramas das turmas'}</h1></div><div className="course-switch">{Object.entries(COURSES).map(([k])=><button key={k} className={course===k?'on':''} onClick={()=>setCourse(k)}>{k}</button>)}</div></header>

      {tab==='calculo' && <section>
        <div className="hero-grid">
          <div className="card form-card">
            <div className="card-title"><GraduationCap/><div><h2>Calcular encontros</h2><p>Selecione a UC e o turno para obter a quantidade de encontros.</p></div></div>
            <label>Unidade Curricular</label>
            <select value={ucId} onChange={e=>setUcId(e.target.value)}>{currentCourse.ucs.map(u=><option key={u.id} value={u.id}>{u.code}{u.short?` ${u.short}`:''} · Módulo {u.module}{u.segment?` · ${u.segment}`:''} · {u.name} · {u.hours}h</option>)}</select>
            <label>Turno</label>
            <div className="segmented">{Object.keys(SHIFT_HOURS).map(s=><button key={s} className={shift===s?'on':''} onClick={()=>setShift(s)}>{s}<small>{SHIFT_HOURS[s]}h/encontro</small></button>)}</div>
            <button className="primary" onClick={addCalculation}><Plus/>Adicionar ao planejamento</button>
          </div>
          <div className="result-card">
            <span className="result-label">RESULTADO</span><strong>{meetings}</strong><b>encontros</b>
            <div className="result-meta"><span><Clock3/>{selectedUc.hours}h de UC</span><span><CalendarDays/>{meetingHours}h por encontro</span></div>
            {selectedUc.id==='TDS-UC17-I' && <p className="split-note">UC17 – Parte I: 25h no Módulo II.</p>}{selectedUc.id==='TDS-UC17-II' && <p className="split-note">UC17 – Parte II: 25h no Módulo III.</p>}
            {lastMeetingHours!==meetingHours && <p className="warning">O último encontro terá {lastMeetingHours}h para fechar exatamente {selectedUc.hours}h.</p>}
          </div>
        </div>
        <div className="card history-card"><div className="card-head"><div><h2>Planejamento salvo</h2><p>Cálculos adicionados nesta estação.</p></div><button className="ghost" onClick={()=>setCalcHistory([])}><RotateCcw/>Limpar</button></div>
          {calcHistory.length===0?<div className="empty">Nenhum cálculo adicionado ainda.</div>:<div className="history-list">{calcHistory.map(x=><div className="history-row" key={x.id}><div className="code-pill">{x.uc.code}</div><div className="grow"><strong>{x.uc.name}</strong><small>{x.course} · Módulo {x.uc.module} · {x.shift} · {x.uc.hours}h</small></div><div className="meeting-badge">{x.meetings}<small>encontros</small></div><button className="icon-btn" onClick={()=>setCalcHistory(h=>h.filter(i=>i.id!==x.id))}><Trash2/></button></div>)}</div>}
        </div>
      </section>}

      {tab==='aproveitamento' && <section className="aproveitamento-grid">
        <div className="card editor-card">
          <div className="card-title"><FileCheck2/><div><h2>Montar aproveitamento</h2><p>Selecione as UCs aprovadas. A UC17 foi dividida em Parte I (25h, Módulo II) e Parte II (25h, Módulo III), com seleção independente.</p></div></div>
          <label>Nome do estudante (opcional)</label><input value={student} onChange={e=>setStudent(e.target.value)} placeholder="Ex.: Maria da Silva" />
          {course==='TDS' && <div className="official-matrix">
            <div className="official-matrix-head"><strong>Matriz TDS oficial</strong><span>Total: 1.216h</span></div>
            <div className="official-matrix-modules">
              <span>Módulo I: 446h</span><span>Módulo II: 253h</span><span>Módulo III: 409h</span><span>Módulo IV: 108h</span>
            </div>
            <small>UC17-I: 25h no Módulo II · UC17-II: 25h no Módulo III.</small>
          </div>}
          <h3>UCs aprovadas pelo estudante</h3>
          <div className="uc-checklist">{approvalItems.map(u=><label className="check-row" key={u.id}><input type="checkbox" checked={approved.includes(u.id)} onChange={()=>toggleApproved(u.id)}/><span className="check-code">{u.code}</span><span className="grow"><strong>{u.name}</strong>{u.segment && <small>{u.segment}</small>}</span><b>{u.hours}h</b></label>)}</div>
          <h3>Tabela de aproveitamento</h3>
          <p className="mini-note">As UCs selecionadas são inseridas automaticamente em “solicitado” e “dispensado”.</p>
          <div className="mapping-preview">
            <div className="mapping-head"><strong>Unidade/Componente Curricular solicitado</strong><strong>Unidade/Componente Curricular dispensado</strong></div>
            {selectedApproved.length===0?<div className="mapping-empty">Selecione uma ou mais UCs acima.</div>:selectedApproved.map(u=><div className="mapping-row" key={u.id}><span><b>{u.code}:</b> {u.name}</span><span><b>{u.code}:</b> {u.name}</span></div>)}
          </div>
          <h3>Turma por módulo</h3><div className="module-fields">{modules.map(m=><div key={m}><label>Módulo {m}</label><input value={classByModule[m]||''} onChange={e=>setClassByModule(v=>({...v,[m]:e.target.value}))} placeholder="Ex.: TDS262N" /></div>)}</div>
          <h3>Carga horária oficial por módulo</h3><p className="mini-note">Valores bloqueados conforme a matriz oficial do curso, evitando divergências nos cálculos.</p><div className="module-fields">{modules.map(m=><div key={m}><label>Módulo {m}</label><div className="fixed-total">{totals[m]} h</div></div>)}</div>
          <h3>Previsões de início</h3><p className="mini-note">Informe a data prevista e a turma para cada componente ainda pendente.</p><div className="date-grid">{missingSegments.map(u=><div className="start-card" key={u.id}><label>{u.code}{u.short?` ${u.short}`:''} · Módulo {u.module} · {u.hours}h</label>{u.segment && <span className="segment-label">{u.segment}</span>}<div className="start-fields"><input type="date" value={startDates[u.id]||''} onChange={e=>setStartDates(v=>({...v,[u.id]:e.target.value}))}/><input value={startClasses[u.id]||''} onChange={e=>setStartClasses(v=>({...v,[u.id]:e.target.value}))} placeholder="Turma, ex.: TDS262N" /></div></div>)}</div>
        </div>

        <div className="report-panel"><div className="report-actions"><button className="primary" onClick={downloadReport}><Download/>Baixar parecer em PNG</button></div>
          <div className="report-paper" ref={reportRef}>
            <div className="report-header"><div className="report-logo">CoordTech</div><div><strong>Demonstrativo de Aproveitamento de Conhecimentos e Experiências Anteriores</strong><small>{currentCourse.label}</small></div></div>
            {student && <p><strong>Estudante:</strong> {student}</p>}
            <div className="report-mapping">
              <div className="report-map-head"><strong>Unidade/Componente Curricular solicitado</strong><strong>Unidade/Componente Curricular dispensado</strong></div>
              {selectedApproved.length===0?<div className="report-map-empty">Nenhuma unidade curricular selecionada para aproveitamento.</div>:selectedApproved.map(u=><div className="report-map-row" key={u.id}><span><b>{u.code}:</b> {u.name}</span><span><b>{u.code}:</b> {u.name}</span></div>)}
            </div>
            <p>O estudante <strong>{approved.length?'possui':'não possui'}</strong> aproveitamento nas UCs {selectedApproved.length?selectedApproved.map(u=>u.code).join(', '):'—'}. As demais unidades curriculares deverão ser cursadas para cumprimento dos requisitos necessários à conclusão do curso.</p>
            {course==='TDS' && <p className="report-highlight"><strong>Observação:</strong> a UC17 está dividida em duas partes independentes para fins de aproveitamento: UC17-I (25h, Módulo II) e UC17-II (25h, Módulo III).</p>}
            <div className="hours-table">
              <div className="hours-head"><strong>Módulo</strong><strong>Total</strong><strong>Aproveitado</strong><strong>A cursar</strong></div>
              {modules.map(m=><div className="hours-row" key={m}><span>Módulo {m}</span><span>{totals[m]}h</span><span>{approvedByModule[m]}h</span><b>{remainingByModule[m]}h</b></div>)}
              <div className="hours-total"><strong>Total</strong><span>{Object.values(totals).reduce((a,b)=>a+b,0)}h</span><span>{totalApproved}h</span><strong>{totalRemaining}h</strong></div>
            </div>
            <div className="total-line">Horas a cursar: <strong>{totalRemaining} horas</strong></div>
            {modules.map(m=>{
              const pending=missingSegments.filter(u=>u.module===m)
              if(!pending.length) return null
              return <div className="module-report" key={m}><p><strong>Apto para matrícula no Módulo {m}</strong>{classByModule[m]?<> com a turma <strong>{classByModule[m]}</strong></>:null}</p>{pending.map(u=><p key={u.id}>Previsão de início para {u.code}{u.segment?` (${u.segment}, Módulo ${u.module})`:''}: <strong>{formatDate(startDates[u.id]) || 'a definir'}</strong>{startClasses[u.id]?<> · Turma: <strong>{startClasses[u.id]}</strong></>:null}</p>)}</div>
            })}
            <div className="signature"><div className="signature-line"></div><strong>Msc. Dalvana Ribeiro</strong><span>Coordenadora dos Cursos de Tecnologia</span></div>
            <div className="report-footer">Parecer gerado pelo sistema CoordTech · {new Date().toLocaleDateString('pt-BR')}</div>
          </div>
        </div>
      </section>}

      {tab==='cronogramas' && <section>
        <div className="card history-card">
          <div className="card-head"><div><h2>Cronogramas das turmas TDS</h2><p>Acesso rápido às planilhas oficiais de cronograma no SharePoint.</p></div></div>
          <div className="history-list">{CLASS_SCHEDULES.map(item=><div className="history-row" key={item.className}><div className="code-pill">{item.className}</div><div className="grow"><strong>Curso Técnico em Desenvolvimento de Sistemas</strong><small>Clique para abrir o cronograma da turma em uma nova aba.</small></div><a className="primary schedule-link" href={item.url} target="_blank" rel="noopener noreferrer"><ExternalLink/>Abrir cronograma</a></div>)}</div>
        </div>
      </section>}

      {tab==='grade' && <section className="modules-wrap">{modules.map(m=><div className="module-block" key={m}><div className="module-title"><div><Layers3/><span>Módulo {m}</span></div><b>{totals[m]}h</b></div><div className="grade-grid">{currentCourse.ucs.filter(u=>u.module===m).map(u=><div className={`uc-card ${u.id.startsWith('TDS-UC17-')?'uc17-card':''}`} key={u.id}><div className="uc-top"><span>{u.code}{u.short?` · ${u.short}`:''}</span><b>{u.hours}h</b></div><h3>{u.name}</h3>{u.segment && <div className="segment-chip">{u.segment}</div>}<div className="uc-footer">Módulo {u.module}<ChevronRight/></div></div>)}</div></div>)}</section>}
    </main>
  </div>
}

createRoot(document.getElementById('root')).render(<App/>)
