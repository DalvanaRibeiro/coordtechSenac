{/* ================================================= */}
{/* PARECER */}
{/* ================================================= */}

<div className="report-panel">

  <div className="report-actions">
    <button
      className="primary"
      onClick={downloadReport}
    >
      <Download />
      Baixar parecer em PNG
    </button>
  </div>

  <div
    className="report-paper"
    ref={reportRef}
  >

    {/* ================================================= */}
    {/* CABEÇALHO DO PARECER */}
    {/* ================================================= */}

    <div className="report-header report-header-clean">

      <div className="report-header-content">

        <strong>
          Demonstrativo de Aproveitamento de
          Conhecimentos e Experiências Anteriores
        </strong>

        <small>
          {currentCourse.label}
        </small>

      </div>

    </div>

    {/* ================================================= */}
    {/* ESTUDANTE */}
    {/* ================================================= */}

    {student && (
      <p className="report-student">
        <strong>Estudante:</strong>{' '}
        {student}
      </p>
    )}

    {/* ================================================= */}
    {/* TABELA DE APROVEITAMENTO */}
    {/* ================================================= */}

    <div className="report-mapping">

      <div className="report-map-head">

        <strong>
          Unidade/Componente Curricular solicitado
        </strong>

        <strong>
          Unidade/Componente Curricular dispensado
        </strong>

      </div>

      {selectedApproved.length === 0 ? (

        <div className="report-map-empty">
          Nenhuma unidade curricular selecionada
          para aproveitamento.
        </div>

      ) : (

        selectedApproved.map((u) => (

          <div
            className="report-map-row"
            key={u.id}
          >

            <span>
              <b>{u.code}:</b>{' '}
              {u.name}
            </span>

            <span>
              <b>{u.code}:</b>{' '}
              {u.name}
            </span>

          </div>

        ))

      )}

    </div>

    {/* ================================================= */}
    {/* TEXTO DO PARECER */}
    {/* ================================================= */}

    <p className="report-text">

      O estudante{' '}

      <strong>
        {approved.length
          ? 'possui'
          : 'não possui'}
      </strong>{' '}

      aproveitamento nas UCs{' '}

      {selectedApproved.length
        ? selectedApproved
            .map((u) => u.code)
            .join(', ')
        : '—'}.

      {' '}As demais unidades curriculares deverão
      ser cursadas para cumprimento dos requisitos
      necessários à conclusão do curso.

    </p>

    {/* ================================================= */}
    {/* OBSERVAÇÃO TDS */}
    {/* ================================================= */}

    {course === 'TDS' && (

      <p className="report-highlight">

        <strong>Observação:</strong>{' '}

        a UC17 está dividida em duas partes
        independentes para fins de aproveitamento:
        UC17-I (25h, Módulo II) e UC17-II
        (25h, Módulo III).

      </p>

    )}

    {/* ================================================= */}
    {/* OBSERVAÇÃO TIA */}
    {/* ================================================= */}

    {course === 'TIA' && (

      <p className="report-highlight">

        <strong>
          Estrutura da matriz:
        </strong>{' '}

        Módulo I – Assistente de Suporte
        Computacional (364h); Módulo II –
        Assistente de Análise de Dados (396h);
        Módulo III – Assistente de Desenvolvimento
        em Inteligência Artificial (440h).

      </p>

    )}

    {/* ================================================= */}
    {/* CARGA HORÁRIA */}
    {/* ================================================= */}

    <div className="hours-table">

      <div className="hours-head">

        <strong>Módulo</strong>

        <strong>Total</strong>

        <strong>Aproveitado</strong>

        <strong>A cursar</strong>

      </div>

      {modules.map((module) => (

        <div
          className="hours-row"
          key={module}
        >

          <span>
            Módulo {module}
          </span>

          <span>
            {totals[module]}h
          </span>

          <span>
            {approvedByModule[module]}h
          </span>

          <b>
            {remainingByModule[module]}h
          </b>

        </div>

      ))}

      <div className="hours-total">

        <strong>Total</strong>

        <span>
          {currentCourse.total}h
        </span>

        <span>
          {totalApproved}h
        </span>

        <strong>
          {totalRemaining}h
        </strong>

      </div>

    </div>

    {/* ================================================= */}
    {/* TOTAL A CURSAR */}
    {/* ================================================= */}

    <div className="total-line">

      Horas a cursar:{' '}

      <strong>
        {totalRemaining} horas
      </strong>

    </div>

    {/* ================================================= */}
    {/* PENDÊNCIAS POR MÓDULO */}
    {/* ================================================= */}

    {modules.map((module) => {

      const pending =
        missingSegments.filter(
          (u) => u.module === module
        )

      if (!pending.length) {
        return null
      }

      return (

        <div
          className="module-report"
          key={module}
        >

          <p>

            <strong>
              Apto para matrícula no Módulo {module}
            </strong>

            {classByModule[module] ? (
              <>
                {' '}com a turma{' '}

                <strong>
                  {classByModule[module]}
                </strong>
              </>
            ) : null}

          </p>

          {pending.map((u) => (

            <p key={u.id}>

              Previsão de início para{' '}
              {u.code}:{' '}

              <strong>
                {formatDate(
                  startDates[u.id]
                ) || 'a definir'}
              </strong>

              {startClasses[u.id] ? (
                <>
                  {' '}· Turma:{' '}

                  <strong>
                    {startClasses[u.id]}
                  </strong>
                </>
              ) : null}

            </p>

          ))}

        </div>

      )

    })}

    {/* ================================================= */}
    {/* ASSINATURAS */}
    {/* ================================================= */}

    <div className="report-signatures">

      <h3>
        Assinaturas:
      </h3>

      {/* PEDAGOGO */}

      <div className="signature-pedagogo">

        <div className="signature-field">

          <div className="signature-line" />

          <strong>
            Pedagogo (a)
          </strong>

        </div>

      </div>

      {/* DOCENTES */}

      <div className="signature-docentes">

        <div className="signature-field">

          <div className="signature-line" />

          <strong>
            Docente
          </strong>

        </div>

        <div className="signature-field">

          <div className="signature-line" />

          <strong>
            Docente
          </strong>

        </div>

      </div>

    </div>

    {/* ================================================= */}
    {/* RODAPÉ */}
    {/* ================================================= */}

    <div className="report-footer">

      Documento gerado em{' '}

      {new Date().toLocaleDateString(
        'pt-BR'
      )}

    </div>

  </div>

</div>
