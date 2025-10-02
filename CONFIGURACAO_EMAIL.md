# Configuração do EmailJS para Envio de Emails

## 📧 Como Configurar o Envio de Emails

### 1. Criar Conta no EmailJS
1. Acesse [https://www.emailjs.com/](https://www.emailjs.com/)
2. Clique em "Sign Up" e crie uma conta gratuita
3. Confirme seu email

### 2. Configurar Serviço de Email
1. No dashboard, clique em "Email Services"
2. Clique em "Add New Service"
3. Escolha "Gmail" (recomendado)
4. Conecte sua conta Gmail (jadersoncunha@gmail.com)
5. Anote o **Service ID** gerado

### 3. Criar Template de Email
1. Vá para "Email Templates"
2. Clique em "Create New Template"
3. Use este template:

**Subject:** Novo Pedido - Marju Confeitaria

**Content:**
```
Olá Marju!

Você recebeu um novo pedido através do site:

DADOS DO CLIENTE:
Nome: {{from_name}}
E-mail: {{from_email}}
WhatsApp: {{phone}}

DETALHES DO PEDIDO:
Produto: {{product}}
Quantidade: {{quantity}}
Serve quantas pessoas: {{people}}

OBSERVAÇÕES:
{{observations}}

---
Este email foi enviado automaticamente através do site da Marju Confeitaria.
```

4. Anote o **Template ID** gerado

### 4. Obter Chave Pública
1. Vá para "Account" > "General"
2. Copie sua **Public Key**

### 5. Atualizar o Código
No arquivo `main.js`, substitua:

```javascript
// Linha 6: Substitua YOUR_PUBLIC_KEY
emailjs.init('SUA_CHAVE_PUBLICA_AQUI');

// Linha 95: Substitua YOUR_SERVICE_ID e YOUR_TEMPLATE_ID
emailjs.send('SEU_SERVICE_ID', 'SEU_TEMPLATE_ID', emailParams)
```

### 6. Exemplo de Configuração
```javascript
// Exemplo (substitua pelos seus valores reais):
emailjs.init('user_abc123def456');
emailjs.send('service_gmail123', 'template_xyz789', emailParams)
```

## ✅ Resultado
Após a configuração, quando alguém preencher o formulário:
1. ✉️ Um email será enviado para jadersoncunha@gmail.com
2. 📱 O WhatsApp será aberto automaticamente
3. 🎉 O cliente receberá confirmação visual

## 🆓 Limites Gratuitos
- 200 emails por mês
- Sem custo adicional
- Perfeito para pequenos negócios

## 🔧 Teste
Após configurar, teste o formulário para verificar se os emails estão chegando corretamente.

---
*Configuração simples e gratuita para receber pedidos por email!*